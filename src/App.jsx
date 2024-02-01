import Home from './homepage';
import Login from './Profile/loginPage';
import SignUp from './Profile/signout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="dark:text-[#EEEEEE] h-screen bg-gradient-to-bl from-[#F9F7F7] to-[#F9F7F7] dark:bg-gradient-to-bl dark:from-[#222831] dark:to-[#222831] ">
      <BrowserRouter>
        <Routes>
          <Route index path="/TaskManagerReact" element={<Home />} />
          <Route path="/TaskManagerReact/Profile" element={<Login />} />
          <Route path="/TaskManagerReact/SignUp" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
