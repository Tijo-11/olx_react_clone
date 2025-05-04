import { Link } from 'react-router-dom';

function LoginStep1({ setStep }) {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button
        className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200"
        disabled
      >
        Continue with Phone
      </button>
      <button
        className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200"
        disabled
      >
        Continue with Google
      </button>
      <button
        onClick={() => setStep(2)}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Login with Email
      </button>
      <Link
        to="/signup"
        className="w-full bg-white text-indigo-600 border-2 border-indigo-600 py-2 rounded-md text-center hover:bg-indigo-50"
      >
        Create Account
      </Link>
    </div>
  );
}

export default LoginStep1;