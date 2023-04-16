import '../../styles/components/tabs/ItemsTab.css'
import { ItemCard } from '../ui/ItemCard'

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

        <div className="items-list-section">
            <h2>Fruit and vegetables</h2>
            <div className="grid-items-cards">
                <ItemCard name={'Avocado'} />
                <ItemCard name={'Banana'} />
                <ItemCard name={'Bunch of carrots 5pcs'} />
                <ItemCard name={'Chicken 1kg'} />
                <ItemCard name={'Pre-cooked corn 450g'} />
                <ItemCard name={'Mandarin Nadorcott'} />
                <ItemCard name={'Piele De Sapo Melon'} />
                <ItemCard name={'Watermelon'} />
            </div>
        </div>

        <div className="items-list-section">
            <h2>Fruit and vegetables</h2>
            <div className="grid-items-cards">
                <ItemCard name={'Avocado'} />
                <ItemCard name={'Banana'} />
                <ItemCard name={'Bunch of carrots 5pcs'} />
                <ItemCard name={'Chicken 1kg'} />
                <ItemCard name={'Pre-cooked corn 450g'} />
                <ItemCard name={'Mandarin Nadorcott'} />
                <ItemCard name={'Piele De Sapo Melon'} />
                <ItemCard name={'Watermelon'} />
            </div>
        </div>

        <div className="items-list-section">
            <h2>Fruit and vegetables</h2>
            <div className="grid-items-cards">
                <ItemCard name={'Avocado'} />
                <ItemCard name={'Banana'} />
                <ItemCard name={'Bunch of carrots 5pcs'} />
                <ItemCard name={'Chicken 1kg'} />
                <ItemCard name={'Pre-cooked corn 450g'} />
                <ItemCard name={'Mandarin Nadorcott'} />
                <ItemCard name={'Piele De Sapo Melon'} />
                <ItemCard name={'Watermelon'} />
            </div>
        </div>

    </div>
  )
}
