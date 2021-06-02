import logo from './logo.svg';
import './App.css';

import LifecycleComponent from './components/LifecycleComponent';
import FunctionalLifecycleComponent from './components/FunctionalLifecycleComponent';

function App() {
  return (
    <div className="App">
      <LifecycleComponent />
      <FunctionalLifecycleComponent />
    </div>
  );
}

export default App;
