import React, { useEffect,useRef,useContext, useState } from 'react';

interface IContext {
    isAuth: Boolean,
    toggleAuth: () => void,
  }
  
  // Context creation
  const AuthContext = React.createContext<IContext>({
    isAuth: false,
    toggleAuth: () => {},
  });
  
  const Login = () => {
    const context = useContext(AuthContext)
      return (
        <button onClick={()=>context.toggleAuth()}>
          {!context.isAuth ? 'Login' : 'Logout'}
        </button>
      );
  }
  
// React.FunctionComponent - React.FC
const Profile: React.FC = (): React.ReactElement => (
    <AuthContext.Consumer>
      {({ isAuth }: IContext) => (
        <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
      )}
    </AuthContext.Consumer>
  );
  
  // Root component
  const ContextComponent = () => {
    const [isAuth,setIsAuth] = useState(false)
    
    const toggleAuth = () => {
        setIsAuth(prev=>!prev)
    };
    const context: IContext = { isAuth, toggleAuth:toggleAuth }
      return (
        <AuthContext.Provider value={context}>
          <Login />
          <Profile />
        </AuthContext.Provider>
      );
  }

  export default ContextComponent;