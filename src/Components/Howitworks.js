import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">How UniConnect Works</h2>

        {/* Steps */}
        <div className="flex justify-center space-x-12">
          {/* Step 1 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6">
            <div className="bg-purple-800 text-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sign Up</h3>
            <p className="text-gray-600">
              Create your free UniConnect account and start your journey to academic and professional success.
            </p>
          </div>

          {/* Step 2 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6">
            <div className="bg-purple-800 text-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Connect and Collaborate</h3>
            <p className="text-gray-600">
              Connect with like-minded students, faculty, and industry leaders to unlock the power of collaboration.
            </p>
          </div>

          {/* Step 3 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6">
            <div className="bg-purple-800 text-white rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Explore Opportunities</h3>
            <p className="text-gray-600">
              Discover scholarships, internships, and collaborative projects to enhance your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
