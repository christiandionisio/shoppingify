import { FC } from "react"
import '../../styles/components/ui/ItemList.css'
import { ItemCard } from "./ItemCard";

interface Props {
    name: string;
    type: string
}

export const ItemList: FC<Props> = ({name, type}) => {
  return (
    <div className="items-list-section">
        <h2>{name}</h2>
        <div className="grid-items-cards">
            <ItemCard name={'Avocado'} type={type}/>
            <ItemCard name={'Banana'} type={type}/>
            <ItemCard name={'Bunch of carrots 5pcs'} type={type}/>
            <ItemCard name={'Chicken 1kg'} type={type}/>
            <ItemCard name={'Pre-cooked corn 450g'} type={type}/>
            <ItemCard name={'Mandarin Nadorcott'} type={type}/>
            <ItemCard name={'Piele De Sapo Melon'} type={type}/>
            <ItemCard name={'Watermelon'} type={type}/>
        </div>
    </div>
  )
}
