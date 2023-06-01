import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { AddNewItem } from './components/ui/AddNewItem';
// import { ItemContent } from './components/ui/ItemContent';
import { ShoppingList } from './components/ui/ShoppingList';
import { Sidebar } from './components/ui/Sidebar';
import { TabsPage } from './pages/TabsPage';
import { useState } from 'react';

function App() {

  const [isShoppingListActive, setIsActive] = useState(true);

  return (
    <BrowserRouter>
      <div className="shoppingify-app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className={`principal-content ${!isShoppingListActive ? 'display' : ''}`}>
          <TabsPage />
        </div>
        <div className={`shopping-list ${isShoppingListActive ? 'display' : ''}`}>
          <ShoppingList />
          {/* <AddNewItem /> */}
          {/* <ItemContent /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
