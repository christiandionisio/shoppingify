import Bottle from '../../assets/source.svg'

export const ShoppingList = () => {
  return (
    <div className="shopping-list-content">
        <div className="add-item-card">
            <div className="icon-row">
                <img src={Bottle} alt="bottle-svg" />
            </div>
            <div className="content-row">
                <h3>Didn't find what you need?</h3>
                <button>Add item</button>
            </div>
        </div>

        {/* <div className="product-list">
            <div className="header">
                <h1>Shopping list</h1>
                <span>Icon</span>
            </div>
            <div className="subproducts">
                <h6>Fruit and vegetables</h6>
                <ul>
                    <li>
                        <div className="product-title">
                            <p>Acocado</p>
                            <div className="pieces">3 pcs</div>
                        </div>
                    </li>
                    <li>
                        <div className="product-title">
                            <p>Pre-cooked corn 450g</p>
                            <div className="pieces">3 pcs</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div> */}
    </div>
  )
}
