import './App.css';

import { Route, Link } from 'react-router-dom';
import SignIn from '../features/auth/components/signIn';
import Signout from '../features/auth/components/signout';
import '../config/firebase'; 
import { useFetchFirebaseUser } from "rxf";
import { useDispatch } from 'react-redux';
import { User } from 'firebase/auth';
import { setAdminUserState } from '../features/auth/store/admin.user.slice';
export function App() {
  const dispatch = useDispatch();
  useFetchFirebaseUser(
    (userParam: User | null, loadingParam: boolean, errorParam: string) => dispatch(setAdminUserState({
      user: userParam,userLoading: loadingParam, error: errorParam, signOutMessage: ""
    }))
  );
  return (
    <div>
      <SignIn  />
      <Signout />
    </div>
  );
}

export default App;
