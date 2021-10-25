import { registerUser , loginUser } from '../../config/firebase'
import { useState } from 'react'


const Login = ({title , updateUser}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const user = await loginUser(email, password)
    console.log('user from component', user)
    updateUser(user)
  }





  return (
    <div id="container">
      <div className="form-wrap">
        <h1>Login</h1>

        <p>It's free and take a minute only</p>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              onChange = {e => setEmail(e.target.value)}
              type="email"
              name="Email"
              id="email"
              placeholder="abc@gmail.com"
            />
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input
              onChange = {e => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="e.g:Hard One"
            />
          </div>
          <button type="submit" className="btn" onClick={signIn}>
            Login
          </button>
          <p className="bottom-text">
            By clicking the Sign Up button, you agree to our{" "}
            <a href="#">Terms & Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p>
   
      </div>
      <footer>
        <p>
          Don't have an account?
          <button onClick = {()=> title(false)} >Sign Up</button>
        </p>
      </footer>
    </div>
  );
};

export default Login;
