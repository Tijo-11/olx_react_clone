import olxLogo from '../assets/olx-logo.svg';
import avatar from '../assets/avatar.png';

function LoginStep3({ email, setStep, handleLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    handleLogin(password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <button
        type="button"
        onClick={() => setStep(2)}
        className="self-start text-gray-600 hover:underline"
      >
        Back
      </button>
      <img src={olxLogo} alt="OLX Logo" className="h-8 mx-auto" />
      <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center">Welcome back, {email}</h2>
      <input
        type="password"
        name="password"
        className="w-full p-2 border rounded-md"
        placeholder="Password"
        required
      />
      <a href="#" className="text-sm text-indigo-600 hover:underline">
        Forgot Password?
      </a>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginStep3;