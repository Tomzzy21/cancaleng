import { useEffect, useState } from 'react';

const words = ['Provider', 'Partner', 'Pillar', 'Pioneer', 'Plug', 'Producer', 'Pipeline', 'Powerhouse', 'Point', 'Prism', 'Prodigy'];

const TypingAnimation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // ms

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const type = () => {
      if (isDeleting) {
        // Delete characters
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(75); // Faster when deleting
      } else {
        // Type characters
        setCurrentText(word.substring(0, currentText.length + 1));
      }

      // Determine if we should start deleting or move to next word
      if (!isDeleting && currentText === word) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="inline-block min-w-[150px] text-left">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
