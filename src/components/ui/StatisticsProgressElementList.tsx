import { FC } from "react";

interface Props {
    elementType: string;
}

export const StatisticsProgressElementList: FC<Props> = ({elementType}) => {
  return (
    <div className="list-progress-bar-element">
        <h1>Top {elementType}</h1>
        
        <div className="progress-bar-element">
            <p>Banana</p>
            <progress value={50} max={100}></progress>
        </div>
        <div className="progress-bar-element">
            <p>Rice</p>
            <progress value={50} max={100}></progress>
        </div>
        <div className="progress-bar-element">
            <p>Chicken 1kg</p>
            <progress value={50} max={100}></progress>
        </div>
    </div>
  )
}
