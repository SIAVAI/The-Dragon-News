import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/.*@gmail\.com/.test(email)) {
      setError("Not a valid e-mail address!!");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters!!");
      return;
    }
    loginUser(email, password);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <h1 className="text-6xl font-bold">Login now!</h1>
            </div>
            <p className="py-6 text-xl">
              On The Dragon News website, logging in unlocks personalized
              content and features like premium articles, tailored
              recommendations, and interactive community engagement. It ensures
              privacy, security, and enables users to access exclusive benefits
              while fostering a sense of belonging within the news community.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="/reg"
                    className="label-text-alt link link-hover mt-4 text-base"
                  >
                    New? Register First!!
                  </a>
                </label>
              </div>
              <div className="text-red-500 font-medium my-4">
                {error ? (
                  <div>
                    <p>{error}</p>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-[#D72050] font-medium text-white border border-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
