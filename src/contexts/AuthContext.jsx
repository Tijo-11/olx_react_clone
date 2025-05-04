import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ? { email: firebaseUser.email } : null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signOutUser = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <AuthContext.Provider value={{ user, signOut: signOutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}