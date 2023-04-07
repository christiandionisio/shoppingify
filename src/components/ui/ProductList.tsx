import '../../styles/components/ui/ProductList.css'

export const ProductList = () => {
  return (
    <div className="product-list">
        <div className="header">
            <h1>Shopping list</h1>
            <span className="material-symbols-outlined">edit</span>
        </div>
        <div className="subproducts">
            <h6>Fruit and vegetables</h6>
            <ul>
                <li className="product-title">
                    <p>Acocado</p>
                    <div className="pieces">3 pcs</div>
                </li>
                <li className="product-title">
                    <p>Pre-cooked corn 450g</p>
                    <div className="pieces">3 pcs</div>
                </li>
            </ul>
        </div>
        <div className="subproducts">
            <h6>Meat and Fish</h6>
            <ul>
                <li className="product-title">
                    <p>Chicken 1kg</p>
                    <div className="pieces">3 pcs</div>
                </li>
                <li className="product-title">
                    <p>Pork fillets 450g</p>
                    <div className="pieces">3 pcs</div>
                </li>
                <li className="product-title">
                    <p>Salmon 1kg</p>
                    <div className="pieces">3 pcs</div>
                </li>
                <li className="product-title">
                    <p>Pork fillets 450g</p>
                    <div className="pieces">3 pcs</div>
                </li>
                <li className="product-title">
                    <p>Salmon 1kg</p>
                    <div className="pieces">3 pcs</div>
                </li>
            </ul>
        </div>
    </div>
  )
}
