import { useDispatch } from 'react-redux';
import Bottle from '../../assets/source.svg'
import '../../styles/components/ui/ShoppingList.css'
import { ProductList } from './ProductList'
import { uiOpenCart } from '../../actions/ui';

export const ShoppingList = () => {

  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(uiOpenCart());
}


  return (
    <div className="shopping-list-content">
        <div className="add-item-card">
            <div className="icon-row">
                <img src={Bottle} alt="bottle-svg" />
            </div>
            <div className="content-row">
                <h3>Didn't find what you need?</h3>
                <button onClick={() => openCart()}>Add item</button>
            </div>
        </div>

        <ProductList />
        
        <div className="name-footer">
            <div className="enter-name-input">
              <input type="text" placeholder='Enter a name' />
              <button>Save</button>
            </div>
        </div>
    </div>
  )
}
