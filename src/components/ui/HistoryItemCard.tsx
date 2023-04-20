

export const HistoryItemCard = () => {
  return (
    <div className="history-item-card">
        <div className="left">
            <h6>Grocery List</h6>
        </div>

        <div className="right">
            <span className="material-symbols-outlined">
                calendar_month
            </span>
            <p>Mon 27.8.2020</p>
            <div className="badge">
                completed
            </div>
            <span className="material-symbols-outlined">
                arrow_forward_ios
            </span>
        </div>
    </div>
  )
}
