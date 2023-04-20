import { HistoryItemCard } from "./HistoryItemCard"
import '../../styles/components/ui/HistoryListItem.css'


export const HistoryListItem = () => {
  return (
    <div className="monthly-history-list">
        <h3>August 2020</h3>
        <div className="history-list">
            <HistoryItemCard />
            <HistoryItemCard />
            <HistoryItemCard />
        </div>
    </div>
  )
}
