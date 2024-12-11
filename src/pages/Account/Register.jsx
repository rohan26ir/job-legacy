import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottieData from '../../assets/Lottie/Animation - sign-Up.json';
import AuthContext from '../../Context/AuthContext/AuthContext';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState(""); // For displaying error messages
  const [loading, setLoading] = useState(false); // Track loading state

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Clear previous error messages
    setError("");
    setLoading(true);

    // Email validation (basic regex check)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return; // Stop form submission if email is invalid
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return; // Stop form submission if password is too short
    }

    // Attempt to create the user
    createUser(email, password)
      .then((result) => {
        console.log("User registration result:", result); // Debugging the result
        if (result && result.user) {
          console.log(result.user); // Successfully created user
        } else {
          setError("Something went wrong during registration.");
        }
      })
      .catch((error) => {
        setError(error.message); // Show error message if user creation fails
      })
      .finally(() => {
        setLoading(false); // Hide loading spinner after request finishes
      });
  };

  return (
    <div>
      <div className="">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <div className="w-96">
                <Lottie animationData={registerLottieData} />
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h2 className="text-4xl font-bold mx-auto mt-5">Register</h2>
              {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error messages */}
              <form className="card-body" onSubmit={handleRegister}>
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
                    {loading ? "Registering..." : "Register"} {/* Show loading state */}
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

export default Register;
