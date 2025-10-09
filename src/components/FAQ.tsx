import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center"
      >
        <h3 className="font-heading font-semibold text-steel-blue pr-8">{question}</h3>
        <span className="text-tech-teal text-2xl flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <p className="mt-3 text-charcoal text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
