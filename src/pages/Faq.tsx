
import React from 'react';
import Layout from '../components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FaqPage = () => {
  // FAQ categories with their questions and answers
  const faqCategories = [
    {
      category: "General Questions",
      items: [
        {
          question: "Is All In One PDF Tool completely free?",
          answer: "Yes, our basic tools are free to use with no hidden charges. We process your PDF files online without requiring you to install any software."
        },
        {
          question: "Do I need to create an account to use the tools?",
          answer: "Most of our tools can be used without an account. However, creating a free account allows you to access your file history and provides additional features."
        },
        {
          question: "How secure are my files?",
          answer: "Your files are processed securely and are automatically deleted from our servers after processing is complete. We do not share your files with third parties and use encryption for data transfer."
        },
        {
          question: "Can I use the tools on mobile devices?",
          answer: "Yes, All In One PDF Tool is fully responsive and works on desktop computers, tablets, and smartphones."
        }
      ]
    },
    {
      category: "Using the Tools",
      items: [
        {
          question: "What file types can I convert to PDF?",
          answer: "You can convert various file types to PDF including Word documents (.doc, .docx), Excel spreadsheets (.xls, .xlsx), PowerPoint presentations (.ppt, .pptx), and image files (.jpg, .jpeg, .png, .gif, .bmp, .tiff)."
        },
        {
          question: "Is there a file size limit?",
          answer: "Yes, there is a file size limit of 100MB per file for all tools. This helps ensure optimal performance and processing speed."
        },
        {
          question: "How do I merge multiple PDF files?",
          answer: "To merge PDFs, upload multiple files to our Merge PDF tool, arrange them in your desired order by dragging and dropping, and then click the 'Process Files' button. Once processing is complete, you can download the merged PDF."
        },
        {
          question: "How can I compress a PDF file?",
          answer: "Upload your file to our Compress PDF tool, select your desired compression level, and click the 'Process Files' button. After processing, you'll be able to download the compressed file."
        }
      ]
    },
    {
      category: "Technical Support",
      items: [
        {
          question: "What should I do if a tool isn't working?",
          answer: "First, make sure you're using a supported browser (latest versions of Chrome, Firefox, Safari, or Edge). Try clearing your browser cache and cookies, then reload the page. If the issue persists, please contact our support team with details about the problem."
        },
        {
          question: "Why can't I open the processed file?",
          answer: "If you're having trouble opening a processed file, it might be due to incomplete download or file corruption. Try downloading the file again. If the issue persists, make sure you have the appropriate software to open the file format (like Adobe Acrobat for PDFs)."
        },
        {
          question: "How can I report a bug?",
          answer: "If you encounter any bugs or issues while using our tools, please contact us through our Contact page with details about the issue, including what tool you were using, what actions you took, and any error messages you received."
        },
        {
          question: "My file failed to process. What should I do?",
          answer: "File processing may fail due to various reasons such as file corruption, incompatible format, or server issues. Try using a different file or converting your file to a compatible format first. If the problem persists, please contact our support team."
        }
      ]
    },
    {
      category: "Account & Privacy",
      items: [
        {
          question: "How do I delete my account?",
          answer: "To delete your account, please sign in, go to your account settings, scroll down to the bottom of the page, and click on 'Delete Account'. Follow the instructions to complete the process."
        },
        {
          question: "What data do you collect about me?",
          answer: "We collect minimal personal information necessary to provide our services. This may include your email address (if you create an account) and usage data. Please refer to our Privacy Policy for detailed information about our data practices."
        },
        {
          question: "How long do you keep my files?",
          answer: "We do not store your files longer than necessary for processing. All uploaded files are automatically deleted after processing is complete or within 24 hours, whichever comes first."
        },
        {
          question: "How can I opt out of communications?",
          answer: "You can opt out of our communications by clicking the 'Unsubscribe' link at the bottom of any email we send you, or by updating your communication preferences in your account settings."
        }
      ]
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700">
              Find answers to common questions about using All In One PDF Tool.
            </p>
            
            <div className="mt-8 max-w-lg mx-auto relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                className="pl-10" 
                placeholder="Search for answers..." 
                type="search" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`${index}-${itemIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100 text-center">
              <h3 className="text-lg font-medium mb-3">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                We're here to help! If you couldn't find the answer you were looking for, feel free to reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-center">
                  Contact Support
                </Link>
                <Link to="/help" className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center">
                  Visit Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage;
