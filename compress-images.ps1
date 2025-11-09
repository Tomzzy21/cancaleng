# Create optimized directory if it doesn't exist
$optimizedDir = "public/optimized"
if (-not (Test-Path $optimizedDir)) {
    New-Item -ItemType Directory -Path $optimizedDir | Out-Null
}

# Get all image files in the public directory
$images = Get-ChildItem -Path "public" -Include *.jpg, *.jpeg, *.png -Recurse | 
          Where-Object { $_.FullName -notlike "*\optimized\*" }

foreach ($img in $images) {
    $outputPath = Join-Path $optimizedDir $img.Name
    
    # Skip if already processed
    if (Test-Path $outputPath) {
        Write-Host "Skipping $($img.Name) - already processed"
        continue
    }
    
    Write-Host "Compressing $($img.Name)..."
    
    # Use Windows built-in tools to compress the image
    Add-Type -AssemblyName System.Drawing
    
    try {
        $image = [System.Drawing.Image]::FromFile($img.FullName)
        
        # Calculate new dimensions (reduce by 50% for demonstration)
        $newWidth = [int]($image.Width * 0.8)
        $newHeight = [int]($image.Height * 0.8)
        
        # Create a new bitmap with the new dimensions
        $bitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        
        # Set high-quality interpolation mode
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        
        # Draw the image with the new dimensions
        $graphics.DrawImage($image, 0, 0, $newWidth, $newHeight)
        
        # Set compression quality (0-100, lower = more compression)
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 75)
        
        # Get the JPEG codec
        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | 
                     Where-Object { $_.MimeType -eq "image/jpeg" }
        
        # Save the compressed image
        $bitmap.Save($outputPath, $jpegCodec, $encoderParams)
        
        # Clean up
        $graphics.Dispose()
        $bitmap.Dispose()
        $image.Dispose()
        
        # Get file size before and after
        $originalSize = (Get-Item $img.FullName).Length / 1MB
        $compressedSize = (Get-Item $outputPath).Length / 1MB
        $savings = (1 - ($compressedSize / $originalSize)) * 100
        
        Write-Host "  Compressed $($img.Name) - ${originalSize:N2}MB -> ${compressedSize:N2}MB (${savings:N1}% savings)"
    }
    catch {
        Write-Host "  Error compressing $($img.Name): $_" -ForegroundColor Red
    }
}

Write-Host "\nCompression complete. Check the 'public/optimized' folder for compressed images."
