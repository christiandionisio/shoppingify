import '../../styles/components/ui/Sidebar.css'
import Logo from '../../assets/logo.svg'

export const Sidebar = () => {
  return (
    <div className='sidebar-content'>
        <div className="logo">
            <img src={Logo} alt="svg" />
        </div>

        <div className="tabs">
            <div className="items-tab active-tab">
                <span className="material-symbols-outlined">
                    format_list_bulleted
                </span>
                <span className="tooltip-text">items</span>
            </div>

            <div className="history-tab">
                <span className="material-symbols-outlined">
                    replay
                </span>
                <span className="tooltip-text">history</span>
            </div>

            <div className="statistics-tab">
                <span className="material-symbols-outlined">
                    insert_chart
                </span>
                <span className="tooltip-text">statistics</span>
            </div>
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
