import { useState } from 'react';
import './App.css';
import About from './component/About';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
     document.body.style.backgroundColor = '#042743'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <NavBar title="MyFirstApp" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
      <TextForm  heading="Enter the text to analyse below:" mode={mode} />
      </div>
    </>
  );
}

export default App;
