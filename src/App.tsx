import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { AddNewItem } from './components/ui/AddNewItem';
// import { ItemContent } from './components/ui/ItemContent';
import { ShoppingList } from './components/ui/ShoppingList';
import { Sidebar } from './components/ui/Sidebar';
import { TabsPage } from './pages/TabsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="shoppingify-app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="principal-content">
          <TabsPage />
        </div>
        <div className="shopping-list">
          <ShoppingList />
          {/* <AddNewItem /> */}
          {/* <ItemContent /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
