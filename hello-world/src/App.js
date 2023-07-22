import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name ="Rayhan" heroName ="RayhanMan">
        Masnya ini adalah MC
      </Greet>
      <Greet name ="Handoko" heroName ="Handokoman"/>
      <Greet name = "kipli" heroName ="Peashooter"/>

      <Welcome name ="Rayhan" heroName ="RayhanMan"/>
      <Welcome name ="Handoko" heroName ="Handokoman"/>
      <Welcome name = "kipli" heroName ="Peashooter"/>
      
      <Hello/>
    </div>
  );
}

export default App;
