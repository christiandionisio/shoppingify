import { FC } from "react";
import { StatisticsProgressElement } from "./StatisticsProgressElement";

interface Props {
    elementType: string;
}

export const StatisticsProgressElementList: FC<Props> = ({elementType}) => {
  return (
    <div className="list-progress-bar-element">
        <h1>Top {elementType}</h1>
        <StatisticsProgressElement elementType={elementType} elementName="Banana" />
        <StatisticsProgressElement elementType={elementType} elementName="Rice" />
        <StatisticsProgressElement elementType={elementType} elementName="Chicken 1kg" />
    </div>
  )
}
