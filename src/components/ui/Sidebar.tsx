import '../../styles/components/ui/Sidebar.css'
import Logo from '../../assets/logo.svg'

export const Sidebar = () => {
  return (
    <div className='sidebar-content'>
        <div className="logo">
            <img src={Logo} alt="svg" />
        </div>

        <div className="tabs">
            tabs
        </div>

        <div className="cart">
            <div className="cart-icon">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
            </div>
            <div className="badge">3</div>
        </div>
    </div>
  )
}
