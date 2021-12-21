import './App.css';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <Display strikes={2} balls={3} />
    </div>
  );
}

export default App;
