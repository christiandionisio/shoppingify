

export const StatisticsTab = () => {
  return (
    <div className="statistics-tab">
        <div className="percentage-elements-view">
            <div className="list-progress-bar-element">
                <h1>Top items</h1>
                
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

            <div className="list-progress-bar-element">
                <h1>Top Categories</h1>
                
                <div className="progress-bar-element">
                    <p>Fruit and vegetables</p>
                    <progress value={50} max={100}></progress>
                </div>
                <div className="progress-bar-element">
                    <p>Meat and Fish</p>
                    <progress value={50} max={100}></progress>
                </div>
                <div className="progress-bar-element">
                    <p>Pets</p>
                    <progress value={50} max={100}></progress>
                </div>
            </div>
        </div>
    </div>
  )
}
