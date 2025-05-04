
import React from 'react';
import Layout from '../components/Layout';

const Terms = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the All In One PDF Tool service ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
              
              <h2>2. Description of Service</h2>
              <p>
                All In One PDF Tool provides online PDF manipulation tools including merging, splitting, compressing PDFs, and other related functionalities. The Service is provided "as is" and is subject to change without notice.
              </p>
              
              <h2>3. User Accounts</h2>
              <p>
                To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
              
              <h2>4. User Content</h2>
              <p>
                You retain all rights to your content. By uploading files to our Service, you grant us a limited license to process these files for the purpose of providing our Service.
              </p>
              
              <h2>5. Privacy and File Security</h2>
              <p>
                We process your files temporarily to provide our Service. Files are automatically deleted after processing, and we do not access or review the content of your files unless necessary for troubleshooting or required by law.
              </p>
              
              <h2>6. Prohibited Uses</h2>
              <p>
                You agree not to use the Service for any unlawful purpose or in violation of any applicable laws. This includes uploading any content that infringes on intellectual property rights or violates any third-party rights.
              </p>
              
              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, All In One PDF Tool shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.
              </p>
              
              <h2>8. Modifications to the Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of the Service after any changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2>9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Service or third parties.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the jurisdiction in which the company operates, without regard to its conflict of law provisions.
              </p>
              
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@allinonepdf.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
