import { FC } from "react"
import '../../styles/components/ui/ItemCard.css'

interface Props {
    name: string;
    type: string;
}


export const ItemCard: FC<Props> = ({name, type}) => {
  return (
    <div className="item-card">
        <h6>{name}</h6>
        {
          (type === 'history')
            ? (<p>3pcs</p>)
            : (<span className="material-symbols-outlined">add</span>)
        }
    </div>
  )
}
