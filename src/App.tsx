import './App.css';
import { AddNewItem } from './components/ui/AddNewItem';
// import { ShoppingList } from './components/ui/ShoppingList';
import { Sidebar } from './components/ui/Sidebar';
import { TabsPage } from './pages/TabsPage';

function App() {
  return (
    <div className="shoppingify-app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="principal-content">
        <TabsPage />
      </div>
      <div className="shopping-list">
        {/* <ShoppingList /> */}
        <AddNewItem />
      </div>
    </div>
  );
}

export default App;
