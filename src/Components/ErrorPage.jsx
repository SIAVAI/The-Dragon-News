import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-6xl my-10 text-center font-sedan font-medium">
      <h1 className="my-2">Oops!</h1>
      <p className="my-6">Sorry, an unexpected error has occurred.</p>
      <p className="my-8">{error.statusText || error.message}</p>
      <button className="btn btn-ghost my-8 text-4xl bg-[#F3F3F3]">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
