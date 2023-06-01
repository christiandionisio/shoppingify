import '../../styles/components/ui/Sidebar.css'
import Logo from '../../assets/logo.svg'
import { useLocation, useNavigate } from "react-router-dom"

export const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (route: string) => {
        navigate(`${route}`);
    }
    
    const showShoppingList = () => {
        console.log('showShoppingList');
        
    }

  return (
    <div className='sidebar-content'>
        <div className="logo">
            <img src={Logo} alt="svg" />
        </div>

        <div className="tabs">
            <div className={`items-tab ${location.pathname === '/' ? 'active-tab' : ''}`} 
                onClick={() => handleClick('/')}
            >
                <span className="material-symbols-outlined">
                    format_list_bulleted
                </span>
                <span className="tooltip-text">items</span>
            </div>

            <div className={`history-tab ${location.pathname === '/history' ? 'active-tab' : ''}`}  
                onClick={() => handleClick('/history')}
            >
                <span className="material-symbols-outlined">
                    replay
                </span>
                <span className="tooltip-text">history</span>
            </div>

            <div className={`statistics-tab ${location.pathname === '/statistics' ? 'active-tab' : ''}`} 
                onClick={() => handleClick('/statistics')}
            >
                <span className="material-symbols-outlined">
                    insert_chart
                </span>
                <span className="tooltip-text">statistics</span>
            </div>
        </div>

        <div className="cart" onClick={() => showShoppingList()}>
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
