import '../../styles/components/tabs/ItemsTab.css'

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
                <div className="item-card">
                    <h6>Avocado</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
                <div className="item-card">
                    <h6>Banana</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
                <div className="item-card">
                    <h6>Bunch of carrots 5pcs</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
                <div className="item-card">
                    <h6>Chicken 1kg</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
                <div className="item-card">
                    <h6>Pre-cooked corn 450g</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
                <div className="item-card">
                    <h6>Mandarin Nadorcott</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
                <div className="item-card">
                    <h6>Piele De Sapo Melon</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
                <div className="item-card">
                    <h6>Watermelon</h6>
                    <span className="material-symbols-outlined">add</span>
                </div>
            </div>
        </div>

    </div>
  )
}
