const Login = () => {
  return (
    <div className="bg-zinc-500 w-full h-screen flex justify-center items-center font-basis">
      <div className="min-h-[60%] max-h-[80%] bg-white rounded-md w-[70%] sm:w-[45%] lg:w-[35%] xl:w-[30%] flex flex-col items-center py-10 px-8 gap-5 ">
        <h1 className="text-4xl font-semibold ">Sign In</h1>
        <h3 className="text-lg text-center font-light">
          Enter the Credentials you want to login account
        </h3>
        <div className=" font-custom font-semibold tracking-wide items-start w-full ">
          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="userName" className="text-md">
                User Name
              </label>
              <input
                type="text"
                placeholder="Abhishek"
                id="userName"
                className="w-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 py-1 px-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="password" className="text-md">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 py-1 px-2 rounded"
              />
            </div>
            <div className="mt-5 flex flex-col items-center gap-5">
              <button className="px-5 py-1 rounded-md bg-sky-500 text-white">
                Submit
              </button>
              <h1 className="text-center">Don't have an account? Sign up</h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
