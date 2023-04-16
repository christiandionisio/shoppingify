import { FC } from "react"
import '../../styles/components/ui/ItemCard.css'

interface Props {
    name: string;
}


export const ItemCard: FC<Props> = ({name}) => {
  return (
    <div className="item-card">
        <h6>{name}</h6>
        <span className="material-symbols-outlined">add</span>
    </div>
  )
}
