const signup = () => {
  return (
    <div className="bg-zinc-500 w-full h-screen flex justify-center items-center font-basis">
      <div className=" h-[80%] bg-white rounded-md w-[70%] sm:w-[45%] lg:w-[35%] xl:w-[30%] flex flex-col items-center py-10 px-8 gap-5 ">
        <h1 className="text-4xl font-semibold ">Sign Up</h1>
        <h3 className="text-lg text-center font-light">
          Enter the information you want to create account
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
              <label htmlFor="firstName" className="text-md">
                First Name
              </label>
              <input
                type="text"
                placeholder="Abhishek"
                className="w-full border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 py-1 px-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lastName" className="text-md">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Singh"
                id="lastName"
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
            <div className="mt-5 relative">
              <button className="px-5 py-1 rounded-md bg-sky-500 text-white absolute left-1/2 -translate-x-[50%]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
