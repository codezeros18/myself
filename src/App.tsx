// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Minigames from './Pages/Minigames'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Social from './Pages/Social'
import Tic from './Games/Tic'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/minigames" element={<Minigames />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/social" element={<Social />} />
                        {/* Path */}
                        <Route path="/tic" element={<Tic />} />
                </Routes>
        </Router>
    )
}

export default App
