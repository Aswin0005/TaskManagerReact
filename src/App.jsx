import NavBar from './NavBar/NavigationBar';
import CreateTask from './CreateBar/TaskCreate';
import { StrictMode } from 'react';


function App() {
  return (
    <div className="container dark:text-[#EEEEEE] h-screen bg-gradient-to-bl from-[#F9F7F7] to-[#F9F7F7] dark:bg-gradient-to-bl dark:from-[#222831] dark:to-[#222831] ">
      <StrictMode>
        <NavBar />
        <CreateTask />
      </StrictMode>
    </div>
  );
}

export default App;
