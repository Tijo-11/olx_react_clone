function LoginStep2({ email, setEmail, setStep }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email) setStep(3);
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold mb-4">Enter Email</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Email"
          required
        />
        <p className="text-sm text-gray-600">
          If you are a new user please select any other login option from previous page.
        </p>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Next
        </button>
      </form>
    );
  }
  
  export default LoginStep2;