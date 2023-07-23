import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">

      <EventBind></EventBind>

      {/*
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>

      <Counter/>

      <Message></Message>

      <Greet name ="Rayhan" heroName ="RayhanMan">
        Masnya ini adalah MC
      </Greet>
      <Greet name ="Handoko" heroName ="Handokoman"/>
      <Greet name = "kipli" heroName ="Peashooter"/>

      <Welcome name ="Rayhan" heroName ="RayhanMan"/>
      <Welcome name ="Handoko" heroName ="Handokoman"/>
      <Welcome name = "kipli" heroName ="Peashooter"/>
      
      <Hello/>
    */}

    </div>
  );
}

export default App;
