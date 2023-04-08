import '../../styles/components/tabs/ItemsTab.css'

export const ItemsTab = () => {
  return (
    <div>

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
    </div>
  )
}
