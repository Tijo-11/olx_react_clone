import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import LoginStep1 from '../components/LoginStep1';
import LoginStep2 from '../components/LoginStep2';
import LoginStep3 from '../components/LoginStep3';

function Login() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError('Invalid email or password');
      setStep(3);
    }
  };

  if (loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl">
        {step === 1 && <LoginStep1 setStep={setStep} />}
        {step === 2 && <LoginStep2 email={email} setEmail={setEmail} setStep={setStep} />}
        {step === 3 && (
          <LoginStep3 email={email} setStep={setStep} handleLogin={handleLogin} error={error} />
        )}
      </div>
    </div>
  );
}

export default Login;