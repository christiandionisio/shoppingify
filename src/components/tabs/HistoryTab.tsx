import '../../styles/components/tabs/HistoryTab.css'

export const HistoryTab = () => {
  return (
    <div className="history-tab-content">
        <h1>Shopping history</h1>
        <div className="monthly-history-list">
            <h3>August 2020</h3>
            <div className="history-list">
                <div className="history-item">
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
            </div>
        </div>
    </div>
  )
}
