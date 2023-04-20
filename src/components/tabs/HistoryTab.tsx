import '../../styles/components/tabs/HistoryTab.css'
import { HistoryListItem } from '../ui/HistoryListItem'

export const HistoryTab = () => {
  return (
    <div className="history-tab-content">
        <h1>Shopping history</h1>
        <HistoryListItem />
        <HistoryListItem />
    </div>
  )
}
