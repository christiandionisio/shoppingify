import { StatisticsProgressElementList } from "../ui/StatisticsProgressElementList"
import '../../styles/components/tabs/StatisticsTab.css'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const dataMock = [
  {
    "name": "Enero",
    "items": 4000,
  },
  {
    "name": "Febrero",
    "items": 3000,
  },
  {
    "name": "Marzo",
    "items": 2000,
  },
  {
    "name": "Abril",
    "items": 2780,
  },
  {
    "name": "Mayo",
    "items": 1890,
  },
  {
    "name": "Junio",
    "items": 2390,
  },
  {
    "name": "Julio",
    "items": 3490,
  },
  {
    "name": "Agosto",
    "items": 3490,
  }
]

export const StatisticsTab = () => {
  return (
    <div className="statistics-tab">
        <div className="percentage-elements-view">
            <StatisticsProgressElementList elementType="items" />
            <StatisticsProgressElementList elementType="Categories" />
        </div>
        <div className="chart-view">
          <h1>Monthly Summary</h1>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataMock}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="items" stroke="#F9A109" />
            </LineChart>
          </ResponsiveContainer>
        </div>
    </div>
  )
}
