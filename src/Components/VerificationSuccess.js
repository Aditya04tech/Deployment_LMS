import React from 'react'
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
const VerificationSuccess = () => {
    
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
      <div className="text-center">
        <CheckCircle className="mx-auto h-40 w-40 text-green-500" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Email Verified!</h2>
        <p className="mt-2 text-sm text-gray-600">
          Your email has been successfully verified. You can now log in to your account.
        </p>
      </div>
      <div className="mt-8">
        <Link to="/signin" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Go to Login
        </Link>
      </div>
    </div>
  </div>
  )
}

export default VerificationSuccess
