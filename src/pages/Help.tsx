
import React from 'react';
import Layout from '../components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const helpTopics = [
    {
      question: "How to merge multiple PDF files?",
      answer: "To merge PDFs, go to the Merge PDF tool, upload multiple PDF files by dragging and dropping them or clicking the upload area. You can reorder the files as needed by dragging them. Once your files are in the desired order, click the 'Process Files' button. After processing completes, you can download the merged PDF."
    },
    {
      question: "How to compress a PDF file?",
      answer: "To compress a PDF, navigate to the Compress PDF tool, upload your PDF file by dragging and dropping it or clicking the upload area. Click the 'Process Files' button to start compression. Once processing is complete, you can download the compressed PDF."
    },
    {
      question: "How to convert files to PDF format?",
      answer: "To convert files to PDF, go to the Convert to PDF tool. You can upload Word, Excel, PowerPoint, or image files by dragging and dropping them or clicking the upload area. Click the 'Process Files' button to start conversion. After processing, you can download the converted PDF."
    },
    {
      question: "How to convert PDF to Word?",
      answer: "To convert a PDF to Word, navigate to the PDF to Word tool. Upload your PDF file by dragging and dropping it or clicking the upload area. Click the 'Process Files' button to start conversion. Once processing is complete, you can download the converted Word document."
    },
    {
      question: "How to add page numbers to a PDF?",
      answer: "To add page numbers, go to the Add Page Numbers tool and upload your PDF. Choose the position for your page numbers (top-left, bottom-right, etc.) and set the starting number. Click 'Process Files' to apply the page numbers. Once complete, download your numbered PDF."
    },
    {
      question: "What file types can I convert to PDF?",
      answer: "You can convert various file types to PDF including Word documents (.doc, .docx), Excel spreadsheets (.xls, .xlsx), PowerPoint presentations (.ppt, .pptx), and image files (.jpg, .jpeg, .png, .gif, .bmp, .tiff)."
    },
    {
      question: "Is there a file size limit?",
      answer: "Yes, there is a file size limit of 100MB per file for all tools. This helps ensure optimal performance and processing speed."
    },
    {
      question: "Are my files secure?",
      answer: "Yes, all your files are processed securely. We do not store your files longer than necessary for processing, and all files are automatically deleted after processing is complete. Your privacy and data security are our top priorities."
    },
    {
      question: "Can I use these tools on mobile devices?",
      answer: "Yes, All In One PDF Tool is fully responsive and works on all devices including smartphones and tablets. The interface adapts to your screen size for the best user experience."
    },
    {
      question: "How do I report issues or bugs?",
      answer: "If you encounter any issues or bugs while using our tools, please contact us through our Contact page. Please include details about the issue, such as what tool you were using, what actions you took, and any error messages you received."
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-lg text-gray-700">
              Find answers to common questions about using All In One PDF Tool.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {helpTopics.map((topic, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {topic.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {topic.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-4">Need More Help?</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer you were looking for, feel free to reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-center">
                  Contact Support
                </a>
                <a href="/tools" className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center">
                  Browse All Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Help;
