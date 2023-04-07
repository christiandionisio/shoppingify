import './App.css';
import { ShoppingList } from './components/ui/ShoppingList';
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
        <ShoppingList />
      </div>
    </div>
  );
}

export default App;
