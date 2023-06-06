import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { AddNewItem } from './components/ui/AddNewItem';
// import { ItemContent } from './components/ui/ItemContent';
import { ShoppingList } from './components/ui/ShoppingList';
import { Sidebar } from './components/ui/Sidebar';
import { TabsPage } from './pages/TabsPage';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  const [isShoppingListActive, setIsActive] = useState(true);

  return (
    <Provider store={store} >
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
    </Provider>
  );
}

export default App;
