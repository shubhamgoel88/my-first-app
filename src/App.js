import './App.css';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
      <NavBar title="MyFirstApp" />
      <div className='container my-3'>
      <TextForm  heading="Enter the text to analyse below:"/>
      </div>
    
    </>
  );
}

export default App;
