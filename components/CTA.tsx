import React from 'react';

const CTA: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    const formData = new FormData(e.target as HTMLFormElement);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    });
    alert('Thank you for your message!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="max-w-lg">
          <p className="text-[#D4FF00] font-semibold">Contact Us</p>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight tracking-tighter">
            Ready to Start Your Project?
          </h2>
          <p className="mt-6 text-gray-400">
            Let's build something powerful together. Fill out the form, and we'll get back to you shortly to discuss your vision and how we can bring it to life.
          </p>
           <div className="mt-8 text-lg space-y-4">
             <div>
                <p className="font-semibold text-gray-300">Or email us directly:</p>
                <a href="mailto:sales@cancaleng.com" className="font-semibold text-[#D4FF00] hover:text-white transition-colors">
                    sales@cancaleng.com
                </a>
             </div>
             <div>
                <p className="font-semibold text-gray-300">Call us:</p>
                <a href="tel:+2348185205961" className="font-semibold text-[#D4FF00] hover:text-white transition-colors">
                    +234 818 520 5961
                </a>
             </div>
           </div>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" name="name" id="name" required placeholder="John Doe" className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4FF00] transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" name="email" id="email" required placeholder="you@example.com" className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4FF00] transition-all" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number (Optional)</label>
                <input type="tel" name="phone" id="phone" placeholder="+1 (555) 123-4567" className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4FF00] transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" rows={5} required placeholder="Tell us about your project..." className="block w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#D4FF00] transition-all"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-[#D4FF00] text-black font-semibold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all text-lg">
                  Send Message
                </button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;