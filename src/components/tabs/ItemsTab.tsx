import '../../styles/components/tabs/ItemsTab.css'
import { ItemList } from '../ui/ItemList'

export const ItemsTab = () => {
  return (
    <div className='items-tab'>
        <div className="items-header">
            <h1>
                <strong>Shoppingify</strong> allows you 
                take your shopping list wherever you go
            </h1>

            <div className="search-box shadow">
                <span className="material-symbols-outlined">search</span>
                <input type="text" placeholder="search item"/>
            </div>
        </div>

        <ItemList name='Fruit and vegetables' />
        <ItemList name='Meat and fish' />
        <ItemList name='Beverages' />
        <ItemList name='Pets' />

    </div>
  )
}
