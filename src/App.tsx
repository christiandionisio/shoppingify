import './App.css';
import { Sidebar } from './components/ui/Sidebar';

function App() {
  return (
    <div className="shoppingify-app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="principal-content">
        <p>principal-content</p>
      </div>
      <div className="shopping-list">
        <p>shopping-list</p>
      </div>
    </div>
  );
}

export default App;
