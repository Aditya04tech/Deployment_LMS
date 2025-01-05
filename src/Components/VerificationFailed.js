import React from 'react'
import { XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const VerificationFailed = () => {
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <XCircle className="mx-auto h-16 w-16 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Verification Failed</h2>
          <p className="mt-2 text-sm text-gray-600">
            We couldn't verify your email. The link may have expired or is invalid.
          </p>
        </div>
        <div className="mt-8">
                <Link to="/signUp" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Go to SignUp
                </Link>
              </div>
        <div className="mt-8 space-y-4">
         
          {/* <Link href="/contact-support" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Contact Support
          </Link> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default VerificationFailed
