import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";
import { useContext, useState } from "react";

const Reg = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const name = e.target.name.value;
    // eslint-disable-next-line no-unused-vars
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    if (!/.*@gmail\.com/.test(email)) {
      setError("Not a valid e-mail address!!");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters!!");
      return;
    } else if (password !== confirm) {
      setError("Passwords Did Not Match!!");
      return;
    }

    registerUser(email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold">Register now!</h1>
            <p className="py-6 text-xl">
              Register on The Dragon News website for a personalized news
              experience. Access exclusive features like tailored
              recommendations and community engagement. Join today to stay
              informed and connected.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name..."
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirm"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="text-red-500 font-medium my-4">
                {error && (
                  <div>
                    <p>{error}</p>
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-[#D72050] font-medium text-white border border-none"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
