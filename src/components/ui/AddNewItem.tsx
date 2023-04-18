
export const AddNewItem = () => {
  return (
    <div className="new-item-content">
        <h1>Add a new item</h1>
        <form action="">
            <div className="form-field-section">
                <label>Name</label>
                <input type="text" placeholder="Enter a name" />
            </div>

            <div className="form-field-section">
                <label>Name</label>
                <input type="text" placeholder="Enter a name" />
            </div>

            <div className="form-field-section">
                <label>Name</label>
                <input type="text" placeholder="Enter a name" />
            </div>

            <div className="form-field-section">
                <label>Name</label>
                <input type="text" placeholder="Enter a name" />
            </div>
            
            <div className="form-button-section">
                <button className="btn-cancel">cancel</button>
                <button className="btn-save">Save</button>
            </div>

            
        </form>
    </div>
  )
}
