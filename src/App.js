import React from 'react';
import Home from './components/pages/Home';
import { Route ,Routes} from 'react-router';
import Skills from './components/pages/Skills';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skills" element = {<Skills />}/>
        
      </Routes>
    </div>
  );
}

export default App;
