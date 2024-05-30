import React from 'react';
import Home from './components/pages/Home';
import { Route ,Routes} from 'react-router';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills" element = {<Skills />}/>
        <Route path = '/projects' element = {<Projects />}/>
        <Route path = "/contact" element = {<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
