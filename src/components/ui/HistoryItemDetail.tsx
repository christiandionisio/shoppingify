import '../../styles/components/ui/HistoryItemDetail.css'
import { ItemList } from './ItemList'

export const HistoryItemDetail = () => {
  return (
    <div className="history-item-detail">
        <button className="btn-back">
            <span className="material-symbols-outlined">
                keyboard_backspace
            </span>
            <p>back</p>
        </button>

        <h1>Eero’s farewell party</h1>
        <div className="date">
            <span className="material-symbols-outlined calendar-icon">
                calendar_month
            </span>
            <p>Mon 27.8.2020</p>
        </div>

        <ItemList name='Cookies' />
        <ItemList name='Beverages' />

    </div>
  )
}
