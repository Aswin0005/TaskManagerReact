import { useEffect } from 'react';
import { useState } from 'react';


const SignUp = () => {
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

  const [users, setUsers] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleOnChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Hi', users);
    let lsUserInfo = localStorage.getItem('userInfo');
    console.log('uI', lsUserInfo);
    console.log('T or F', lsUserInfo ? 'T' : 'F');
    let userInfo = '';
    if(lsUserInfo){
      let iterInfo = JSON.parse(lsUserInfo);
        console.log(iterInfo);
        userInfo = [...iterInfo, users];
    }else{
        userInfo = [users];
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setUsers({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="w-screen h-screen pattern-overlapping-circles-[#393E46]/20 dark:pattern-overlapping-circles-[#393E46]/100">
      <div className="fixed px-6 py-7 bg-[#DBE2EF] dark:bg-[#393E46] w-[360px] h-[480px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-sm shadow-[#EEEEEE] font-robotoCondensed">
        <form onSubmit={handleOnSubmit} method='POST'>
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={users.name}
            onChange={handleOnChange}
            autoComplete="off"
            required
            placeholder='Enter your Name'
            className="w-full p-1  my-3 h-[26px] rounded-sm text-black"
          ></input>

          <label htmlFor="user-name" className="">
            Username
          </label>
          <input
            type="text"
            id="user-name"
            autoComplete="off"
            name="username"
            value={users.username}
            onChange={handleOnChange}
            required
            placeholder='Enter your UserName'
            className="w-full p-1 my-3 h-[26px] rounded-sm text-black"
          ></input>
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={users.email}
            placeholder='Enter your Email Id'
            onChange={handleOnChange}
            required
            className="w-full p-1 my-3 h-[26px] rounded-sm text-black"
          ></input>
          <lable htmlFor="password" className="">
            Password
          </lable>
          <input
            type="password"
            id="password"
            name="password"
            value={users.password}
            onChange={handleOnChange}
            required
            placeholder='Enter your password'
            className="my-3 p-1 w-full h-[26px] rounded-sm text-black"
          ></input>
          <lable htmlFor="confirm-password" className="">
            Confirm Password
          </lable>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={users.confirmPassword}
            onChange={handleOnChange}
            placeholder='Re-enter your password'
            required
            className="my-3 p-1 w-full h-[26px] rounded-sm text-black"
          ></input>
          <button
            type="submit"
            className="w-full bg-[#3F72AF] dark:bg-[#00ADB5] rounded-sm p-1 mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
