import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the benefits of using automated xxx?",
      answer: "Expert tips on managing finances and building wealth."
    },
    {
      question: "What features are available for me?",
      answer: "We offer a comprehensive suite of features designed to enhance your healthcare journey, including appointment scheduling, medical record management, and personalized health tracking tools."
    },
    {
      question: "How secure is my data on your platform?",
      answer: "We implement industry-leading security measures and encryption protocols to ensure your personal health information remains private and protected at all times."
    },
    {
      question: "Can I integrate other tools with your platform?",
      answer: "Yes, our platform supports integration with various healthcare tools and services, making it easy to consolidate your health management in one place."
    },
    {
      question: "How do I get started with your platform?",
      answer: "Getting started is simple. Just create an account, complete your profile, and you'll have immediate access to our full range of healthcare management tools."
    },
    {
      question: "Is customer support available if I need help?",
      answer: "Yes, our dedicated support team is available 24/7 to assist you with any questions or concerns you may have about using our platform."
    },
    {
      question: "Can I customize my dashboard?",
      answer: "Yes, you can personalize your dashboard to display the information and tools most relevant to your healthcare needs."
    }
  ];

  return (
    <section className="py-24">
      <div className="container px-8">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl">
            FAQ's
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to the most commonly asked questions about our products and services.
          </p>

          <Accordion 
            type="single" 
            collapsible 
            className="mt-12"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-t py-2"
              >
                <AccordionTrigger className="flex gap-6 text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;