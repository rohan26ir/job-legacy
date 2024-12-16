import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import logInLottieData from '../../assets/Lottie/Animation - Log-in.json';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { signinUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/'

  const [error, setError] = useState(""); // For displaying error messages
  const [loading, setLoading] = useState(false); // Track loading state

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signinUser(email, password)
    .then(result => {
      console.log("Sign in:", result.user);
      navigate(from);
    })
    .catch(error => {
      console.log(error);
    })

  };

  return (
    <div>
      <div className="">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <div className="w-96">
                <Lottie animationData={logInLottieData} />
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h2 className="text-4xl font-bold mx-auto mt-5">Login</h2>
              {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error messages */}
              <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" disabled={loading}>
                    {loading ? "Log in..." : "Log in "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
