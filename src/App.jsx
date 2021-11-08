import { useEffect, useState } from 'react';
import "./app.scss";
import About from './components/about/About';
import ComingSoon from './components/comingSoon/ComingSoon';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Topbar from "./components/topbar/Topbar";


const SCROLL_OFFSET = 80;

function App() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {


    const scrollListener = document.addEventListener("scroll", () => {
      if (window.scrollY >= SCROLL_OFFSET) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", scrollListener)
    }
  }, [])



  return (
    <div className="app">
      <div className="wrapper">
        <Topbar scrolled={scrolled} />
        <Main />
        <div className="sections">
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
      <ComingSoon />
    </div>
  );
}

export default App;
