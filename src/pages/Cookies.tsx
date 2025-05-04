
import React from 'react';
import Layout from '../components/Layout';

const Cookies = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Cookie Policy</h1>
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
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Required for the operation of our website and services.</li>
                <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count visitors and see how they move around our website.</li>
                <li><strong>Functional cookies:</strong> Enable our website to provide enhanced functionality and personalization.</li>
                <li><strong>Targeting cookies:</strong> Record your visit to our website, the pages you visited, and the links you followed.</li>
              </ul>
              
              <h2>3. Types of Cookies We Use</h2>
              <h3>Session Cookies</h3>
              <p>
                These cookies are temporary and are deleted when you close your browser. They help our website remember what you did on the previous page, avoiding the need to re-enter information.
              </p>
              
              <h3>Persistent Cookies</h3>
              <p>
                These cookies remain on your device for a specified period. They are used to remember your preferences and choices on our website.
              </p>
              
              <h2>4. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third parties on our behalf. These third parties may include analytics providers that help us understand how you use our website.
              </p>
              
              <h2>5. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul>
                <li>Delete cookies from your device</li>
                <li>Block cookies by activating the setting on your browser that refuses cookies</li>
                <li>Set your browser to notify you when you receive a cookie</li>
              </ul>
              <p>
                Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
              </p>
              
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at support@allinonepdf.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
