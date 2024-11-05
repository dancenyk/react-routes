import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../paginas/Home";
import Projects from "../paginas/Projects";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
};

export default App;
