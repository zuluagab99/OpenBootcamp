import logo from './logo.svg';
import './App.css';
import Greeting from './components/Pure/greeting';
import GreetingF from './components/Pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/container/contact';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Clock from './components/Pure/Clock';
import Clock2 from './components/Pure/Clock2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx*/}
        {/* <Greeting name="Alejandro"></Greeting> */}
        {/*<GreetingF name="Alejandro"></GreetingF>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<ContactComponent></ContactComponent>*/}
        {/*Ejemplo de uso de Hooks*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        <Clock></Clock>
        <Clock2></Clock2>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
