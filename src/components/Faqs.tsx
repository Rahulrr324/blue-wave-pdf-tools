
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "Are these PDF tools free to use?",
      answer: "Yes, most of our basic PDF tools are free to use. For more advanced features and higher file size limits, check out our Premium subscription plans."
    },
    {
      question: "Is my data secure when using BlueWave PDF tools?",
      answer: "Absolutely! We take your privacy seriously. All files are processed in your browser and are not permanently stored on our servers. Your files are automatically deleted after processing."
    },
    {
      question: "What is the maximum file size I can upload?",
      answer: "Free users can upload files up to 50MB in size. Premium users enjoy increased limits of up to 500MB per file."
    },
    {
      question: "How many files can I process at once?",
      answer: "The number of files you can process simultaneously depends on the specific tool, but most tools allow up to 10 files for free users and up to 50 files for Premium users."
    },
    {
      question: "Do I need to create an account to use these tools?",
      answer: "No, you can use most of our tools without creating an account. However, creating an account allows you to save your processing history and access Premium features."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:bg-gray-50">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
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

export default Faqs;
