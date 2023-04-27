import logo from './logo.svg';
import './App.css';
import Hello from './pages/Hello.tsx'

function App() {
  console.log(<Hello/>);
  return (
    <div className="App">
     <Hello/>
    </div>
  );
}

export default App;
