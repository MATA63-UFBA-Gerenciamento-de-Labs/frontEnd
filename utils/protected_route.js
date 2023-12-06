
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserModel from './user_model.js';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
   
    const user =  new UserModel;
    const isAuthenticated = user.isAuthenticated();
    console.log('ProtectedRoute: ',  isAuthenticated);
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [UserModel]);

  return <>{children}</>;
};

export default ProtectedRoute;