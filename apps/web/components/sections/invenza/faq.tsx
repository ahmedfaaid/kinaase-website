import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How easy is it to set up Invenza for my warehouse?',
    answer:
      'Invenza is designed for quick setup with minimal technical knowledge required. Most customers can have their inventory uploaded and be operational within a day. Our guided onboarding process will help you get started, and our support team is available if you need assistance.'
  },
  {
    question: 'Can I track partial shipments or split orders?',
    answer:
      'Yes, Invenza supports tracking partial shipments and split orders. You can easily create multiple tracking records for a single order, allowing you to provide accurate status updates to your customers for each part of their shipment.'
  },
  {
    question: 'Is there a limit to how many products I can manage?',
    answer:
      'The number of products you can manage depends on your plan. The Starter plan allows up to 500 products, the Professional plan up to 2,000, and the Enterprise plan offers unlimited product management. You can upgrade your plan at any time as your business grows.'
  },
  {
    question: 'Does Invenza integrate with shipping carriers?',
    answer:
      'Yes, Invenza integrates with major shipping carriers including UPS, FedEx, USPS, and DHL. These integrations allow for automatic tracking updates and streamlined shipping label creation directly within the platform.'
  },
  {
    question: 'Can my customers check their order status?',
    answer:
      "Absolutely! Invenza provides a customer-facing tracking portal where your customers can enter their order number to see real-time updates on their shipment's status and location. You can also set up automated email or SMS notifications for status changes."
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer different levels of support based on your plan. All plans include email support with response times within 24 hours. The Professional plan adds live chat support, while Enterprise customers receive priority support with dedicated account managers and phone support.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold font-display mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-gray-600'>
            Everything you need to know about Invenza and how it can help your
            warehouse operations.
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          {faqs.map((faq, index) => (
            <div key={index} className='mb-4'>
              <button
                className={`w-full text-left p-5 rounded-lg transition-all duration-200 flex items-center justify-between ${
                  openIndex === index
                    ? 'bg-primary-50 shadow-sm'
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className='font-medium text-lg'>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className='h-5 w-5 text-primary-600 flex-shrink-0' />
                ) : (
                  <ChevronDown className='h-5 w-5 text-gray-400 flex-shrink-0' />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className='p-5 text-gray-600'>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
