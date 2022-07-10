import { useStore } from 'store';

const LoginComponent = () => {

  const {
    actions: { login },
  } = useStore();

  return (
    <div>
      LoginComponent
      <button onClick={login}>Click to sign in</button>
    </div>
  );
}

export default LoginComponent;
