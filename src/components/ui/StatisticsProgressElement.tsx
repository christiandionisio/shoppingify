import { FC } from "react";

interface Props {
    elementType: string;
    elementName: string;
}

export const StatisticsProgressElement: FC<Props> = ({elementType, elementName}) => {
  return (
    <div className="progress-bar-element">
        <p>{elementName}</p>
        <progress value={50} max={100}></progress>
    </div>
  )
}
