import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'lawyer';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: 'client' | 'lawyer') => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // This is a mock login - in a real app, this would be an API call
      // to authenticate the user and get a JWT token
      if (email && password) {
        // Mock user for demo purposes
        const mockUser: User = {
          id: '1',
          name: email.split('@')[0],
          email,
          role: 'client',
        };
        
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Email and password are required');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to login');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, role: 'client' | 'lawyer') => {
    setLoading(true);
    setError(null);
    
    try {
      // This is a mock registration - in a real app, this would be an API call
      if (name && email && password) {
        // Mock user for demo purposes
        const mockUser: User = {
          id: '1',
          name,
          email,
          role,
        };
        
        setUser(mockUser);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Name, email, and password are required');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to register');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      register, 
      logout,
      loading,
      error 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};