import { useState } from 'react';
import './App.css'; //
import About from './Components/About'; //
import Header from './Components/Header'; //
import Introduction from './Components/Introduction'; //
import ProfilePic from './Components/ProfilePic'; //
import ProgressBar from './Components/ProgressBar'; //
import SideBar from './Components/SideBar'; //
import Habilidades from './Components/Habilidades'; //
import Contact from './Components/Contact'; //
import Proyectos from './Components/Proyectos'; //
import Paginas from './Components/Paginas'; // 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <SideBar isOpen={isSidebarOpen} />
        
        <main className="flex-1 pt-[90px] md:ml-[90px] overflow-y-auto">
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-2 p-5'>
              <Introduction/>
              <About/>
              <Habilidades/>
              <Proyectos />
              <Paginas />
              <Contact/>
            </div>
            <div className='hidden md:block'>
              <ProgressBar/>
              <ProfilePic/>
            </div>
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        ></div>
      )}
    </div>
  );
}

export default App;