// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import WaveBackground from './components/common/WaveBackground';

function App() {
  return (
    <div className="app">
      <WaveBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Home />
      </div>
    </div>
  );
}

export default App;