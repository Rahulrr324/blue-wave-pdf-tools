
import React from 'react';
import Layout from '../components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-700">
              Last updated: May 4, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="prose max-w-none">
              <h2>1. Introduction</h2>
              <p>
                This Privacy Policy explains how All In One PDF Tool ("we", "us", "our") collects, uses, and protects your personal information when you use our website and services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We collect the following types of information:
              </p>
              <ul>
                <li><strong>Account Information:</strong> Email address and password (encrypted) when you create an account.</li>
                <li><strong>Usage Information:</strong> Information about how you use our services, including file types processed and features used.</li>
                <li><strong>Device Information:</strong> Information about the device and browser you use to access our services.</li>
                <li><strong>Files:</strong> The files you upload for processing. These are temporarily stored only for the duration needed to provide the requested service.</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete your requested PDF operations</li>
                <li>Send you service-related notifications</li>
                <li>Protect against fraudulent or illegal activity</li>
                <li>Understand how users interact with our services to improve user experience</li>
              </ul>
              
              <h2>4. File Privacy and Security</h2>
              <p>
                <strong>Your files are processed securely and are automatically deleted after processing is complete.</strong> We do not access, review, or analyze the content of your files unless necessary for troubleshooting issues at your request or required by law.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We retain your account information for as long as your account is active. Files uploaded for processing are automatically deleted after processing is complete or within 24 hours, whichever comes first.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal information, including:
              </p>
              <ul>
                <li>Accessing your personal information</li>
                <li>Correcting inaccurate personal information</li>
                <li>Deleting your personal information</li>
                <li>Withdrawing consent for processing your personal information</li>
              </ul>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.
              </p>
              
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@allinonepdf.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
