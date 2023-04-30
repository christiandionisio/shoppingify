import { Route, Routes } from 'react-router-dom'
import { ItemsTab } from '../components/tabs/ItemsTab'
import { HistoryTab } from '../components/tabs/HistoryTab'
import { StatisticsTab } from '../components/tabs/StatisticsTab'

export const AppRouter = () => {
  
  return (
        <Routes>
            <Route path='/' element={<ItemsTab />} />
            <Route path='/history' element={<HistoryTab />} />
            <Route path='/statistics' element={<StatisticsTab />} />
        </Routes>
  )
}
