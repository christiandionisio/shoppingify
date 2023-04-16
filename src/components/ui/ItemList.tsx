import { FC } from "react"
import '../../styles/components/ui/ItemList.css'
import { ItemCard } from "./ItemCard";

interface Props {
    name: string;
}

export const ItemList: FC<Props> = ({name}) => {
  return (
    <div className="items-list-section">
        <h2>{name}</h2>
        <div className="grid-items-cards">
            <ItemCard name={'Avocado'} />
            <ItemCard name={'Banana'} />
            <ItemCard name={'Bunch of carrots 5pcs'} />
            <ItemCard name={'Chicken 1kg'} />
            <ItemCard name={'Pre-cooked corn 450g'} />
            <ItemCard name={'Mandarin Nadorcott'} />
            <ItemCard name={'Piele De Sapo Melon'} />
            <ItemCard name={'Watermelon'} />
        </div>
    </div>
  )
}
