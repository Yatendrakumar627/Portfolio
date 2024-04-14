
// import './App.css'
import Education from './Components/Education'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'

import HashLoader from "react-spinners/HashLoader";

import { useEffect, useState } from 'react'


const override = {
  display : "flex",
  justifyContent : "center",
  alignItems: "center",
  marginTop : "5rem",
  borderColor : "red",
}



const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[]);


  return (
    <>
      {
        loading ? (
          <div className="flex h-screen justify-center items-center bg-[#00040f]">
            <HashLoader
              color="0891b2"
              loading={loading}
              cssOverride={override}
              size={90}
              aria-label="Loading..."
              data-testid="loader"
            />
          </div>
        ) : (
          <div>
          <Navbar></Navbar>
          <About></About>
          <Menu></Menu>
          <Education></Education>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          </div>
        )}
    </>
  );
}

export default App;
