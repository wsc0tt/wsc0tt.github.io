import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Header from "./components/header.tsx";
import Navbar from "./components/navbar.tsx";
import Home from "./routes/home.tsx";
import Projects from "./routes/projects.tsx";
import Resume from "./routes/resume.tsx";
import About from "./routes/about.tsx";
import Contact from "./routes/contact.tsx";

const App = () => {

  return (
    <Router>
        <div className="flex flex-col w-full h-full justify-center items-center">
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path ="/projects" element={<Projects />}/>
                <Route path ="/resume" element={<Resume />}/>
                <Route path ="/about" element={<About />}/>
                <Route path ="/contact" element={<Contact />}/>

            </Routes>
      </div>
    </Router>
  )
}

export default App
