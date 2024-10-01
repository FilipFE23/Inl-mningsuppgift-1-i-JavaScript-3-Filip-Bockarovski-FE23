import logo from './logo.svg';
import './App.css';
import Clock from './clock';

function App() {
  const date = new Date();

  let time = {}

  time.hour = String(date.getHours()).padStart(2, '0');
  time.minute = String(date.getMinutes()).padStart(2, '0');
  time.second = String(date.getSeconds()).padStart(2, '0');

  return (
    <div className='App'>
      <Clock time={time}/>
    </div>
  );
}

export default App;
