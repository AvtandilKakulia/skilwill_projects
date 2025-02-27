
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import ToggleBox from './components/ToggleBox';

function App() {
  console.log('App Re-render');
  const [isDark, setIsDark] = useState(false)
  const appDivRef = useRef(null)

  const setBgColor = useCallback((boolean) => {
    setIsDark(boolean);
}, [])

  useEffect(() => {
    appDivRef.current.style.backgroundColor = isDark ? '#808080' : '#fff'
  }, [isDark])

  return (
    <div className="app" ref={appDivRef}>
      <ToggleBox changeBg={setBgColor} />
    </div>
  );
}

export default App;
