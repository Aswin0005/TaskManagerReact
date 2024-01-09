import NavBar from './NavBar/NavigationBar';
import CreateTask from './CreateBar/TaskCreate';
import { StrictMode } from 'react';


function App() {
  return (
    <div className="container">
      <StrictMode>
        <NavBar />
        <CreateTask />
      </StrictMode>
    </div>
  );
}

export default App;
