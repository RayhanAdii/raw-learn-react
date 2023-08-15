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
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

// Kumpulan code dari episode 1 - 20

function App() {  
  return (
    <div className="App">
    {/* Add classname in regular stylesheet */}
      <h1 className='error'>Error</h1>
    {/* Add classname in css module stylesheet */}
    {/* Menghindari conflict css, kalo misal pake regular, classnamenya tetep bisa dipake di child component*/}
      <h1 className={styles.success}>Success</h1>


    {/*
    <Inline></Inline>


    <Stylesheet primary={true}></Stylesheet>

    <NameList/>

    <UserGreeting></UserGreeting>

    <ParentComponent/>



      <EventBind></EventBind>

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
