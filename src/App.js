import React from 'react';
import Home from './components/pages/Home';
import { Route ,Routes} from 'react-router';
import Demo from './components/pages/Demo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/demo" element={<Demo />}/>
      </Routes>
    </div>
  );
}

export default App;
