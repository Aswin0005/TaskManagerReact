import { useEffect } from 'react';

const Login = () => {
  let theme = localStorage.getItem('theme');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);


  return (
    <div className="w-screen h-screen pattern-overlapping-circles-[#393E46]/20 dark:pattern-overlapping-circles-[#393E46]/100">
      <div className="fixed px-6 py-7 bg-[#DBE2EF] dark:bg-[#393E46] w-[360px] h-[284px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-sm shadow-[#EEEEEE] font-robotoCondensed">
        <form>
          <label htmlFor="user-name" className="">
            Username
          </label>
          <input
            type="text"
            id="user-name"
            className="w-full my-3 h-[26px] rounded-sm text-black"
          ></input>
          <lable htmlFor="password" className="">
            Password
          </lable>
          <input
            type="text"
            id="password"
            className="my-3 w-full h-[26px] rounded-sm text-black"
          ></input>
          <button className="w-full bg-[#3F72AF] dark:bg-[#00ADB5] rounded-sm p-1 mt-4">
            Login
          </button>
          <p className="text-xs mt-2">
            Don't have an account?{' '}
            <a
              href="/TaskManagerReact/Signup"
              className="underline text-blue-400"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
