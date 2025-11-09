
import React, { useState } from 'react';
import { FAQS } from '../constants';
import type { FAQItem as FAQItemType } from '../types';
import { PlusIcon, MinusIcon } from './icons';

const FAQItem: React.FC<{ faq: FAQItemType; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => (
    <div className="border-b border-gray-800">
        <button
            onClick={onToggle}
            className="w-full flex justify-between items-center text-left py-6"
            aria-expanded={isOpen}
        >
            <h3 className={`text-xl font-semibold transition-colors pr-4 ${isOpen ? 'text-[#D4FF00]' : 'text-white hover:text-[#D4FF00]'}`}>
                {faq.question}
            </h3>
            <div className="flex-shrink-0">
                {isOpen ? <MinusIcon className="w-6 h-6 text-[#D4FF00]" /> : <PlusIcon className="w-6 h-6 text-gray-400" />}
            </div>
        </button>
        <div
            className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
            <div className="overflow-hidden">
                <p className="pb-6 text-gray-400 pr-6">
                    {faq.answer}
                </p>
            </div>
        </div>
    </div>
);

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative subtle-glow">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-[#D4FF00] font-semibold">Answers to Your Questions</p>
                <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight tracking-tighter">
                    Frequently Asked Questions
                </h2>
                <p className="mt-6 text-gray-400">
                    Find quick answers to common questions about our services and processes. If you don't find what you're looking for, feel free to contact us directly.
                </p>
            </div>
            <div className="mt-16 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-2 md:p-4">
                <div className="px-4 md:px-6">
                    {FAQS.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;