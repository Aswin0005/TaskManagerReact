import { useState } from 'react';

const NavBar = () => {
  const [user, setUser] = useState('Bob');
  const OnLogOut = () => {
    setUser('');
  };
  return (
    <div className="flex p-2 items-center gap-6 flex-nowrap font-mukta">
      <h1 className="font-bold whitespace-nowrap">TASK MANAGER</h1>
      <div className="flex flex-nowrap grow gap-3">
        <button className="font-semibold text-gray-500">Home</button>
        <button className="font-semibold text-gray-500">About</button>
      </div>
      <h1 className="whitespace-nowrap">{`Hello There,${user}`}</h1>
      {user ? (
        <button
          className="w-20 bg-[#3F72AF] dark:bg-[#00ADB5] rounded items-center p-1 text-white"
          onClick={OnLogOut}
        >
          Log Out
        </button>
      ) : (
        <button className="w-20 bg-[#3F72AF] dark:bg-[#00ADB5] rounded items-center p-1 text-white">
          Log In
        </button>
      )}
    </div>
  );
};

export default NavBar;
