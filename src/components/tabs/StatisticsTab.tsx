import { StatisticsProgressElementList } from "../ui/StatisticsProgressElementList"


export const StatisticsTab = () => {
  return (
    <div className="statistics-tab">
        <div className="percentage-elements-view">
            <StatisticsProgressElementList elementType="items" />
            <StatisticsProgressElementList elementType="Categories" />
        </div>
    </div>
  )
}
