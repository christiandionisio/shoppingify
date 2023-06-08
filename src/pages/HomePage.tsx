import { BrowserRouter } from "react-router-dom"
import { Sidebar } from "../components/ui/Sidebar"
import { TabsPage } from "./TabsPage"
import { ShoppingList } from "../components/ui/ShoppingList"
import { RootState } from "../reducers/rootReducers"
import { useSelector } from "react-redux"
import { AddNewItem } from "../components/ui/AddNewItem"
import { ItemContent } from "../components/ui/ItemContent"


export const HomePage = () => {
    const uiReducer = useSelector((state: RootState) => state.ui);

    return (
        <BrowserRouter>
            <div className="shoppingify-app">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className={`principal-content ${!uiReducer.modalOpen ? 'display' : ''}`}>
                    <TabsPage />
                </div>
                <div className={`shopping-list ${uiReducer.modalOpen ? 'display' : ''}`}>
                    {
                        (uiReducer.addItemOpen) ? (<AddNewItem />) : (<ShoppingList />) 
                    }
                    {/* <ItemContent /> */}
                </div>
            </div>
        </BrowserRouter>
    )
}
