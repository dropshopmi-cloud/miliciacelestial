import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '@/lib/storage';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login or dashboard based on auth status
    if (isAuthenticated()) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return null;
};

export default Index;
