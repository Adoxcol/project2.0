import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">404 - Page Not Found</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;