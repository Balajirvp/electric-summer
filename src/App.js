import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      <header className="App-header text-center bg-blue-600 p-8 rounded-lg shadow-lg">
        <img src={logo} className="App-logo w-32 h-32 mx-auto mb-6" alt="logo" />
        <p className="text-white text-2xl mb-4">
          Edit <code className="font-bold text-yellow-400">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-blue-200 hover:text-blue-500 font-semibold"
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
