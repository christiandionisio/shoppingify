import { FC } from "react";
import '../../styles/components/ui/StatisticsProgressElement.css'

interface Props {
    elementType: string;
    elementName: string;
}

export const StatisticsProgressElement: FC<Props> = ({elementType, elementName}) => {
  return (
    <div className="progress-bar-element">
        <div className="info">
            <p>{elementName}</p>
            <h6>12%</h6>
        </div>
        <progress value={50} max={100}></progress>
    </div>
  )
}
