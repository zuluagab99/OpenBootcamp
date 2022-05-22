import logo from './logo.svg';
import './App.css';
import Greeting from './components/Pure/greeting';
import GreetingF from './components/Pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/container/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx*/}
        {/* <Greeting name="Alejandro"></Greeting> */}
        {/*<GreetingF name="Alejandro"></GreetingF>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ContactComponent></ContactComponent>

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
