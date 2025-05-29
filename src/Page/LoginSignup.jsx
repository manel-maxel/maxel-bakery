import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false); // Toggle state

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email, password });

    if (isLogin) {
      alert(`Welcome back, ${email}!`);
    } else {
      alert(`Welcome, ${name}!`);
    }

    // Add logic here: login or register API call
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Log in 💌' : 'Sign-up 🎀'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {!isLogin && (
              <input
                type="text"
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Log in' : 'Continue'}</button>
        </form>
        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={toggleMode} style={{ color: '#ff1493', cursor: 'pointer', textDecoration: 'underline' }}>
            {isLogin ? 'Sign up!' : 'Log in!'}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id='agree'/>
          <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;