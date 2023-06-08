import { useDispatch } from 'react-redux';
import '../../styles/components/ui/AddNewItem.css';
import { uiCloseAddItem } from '../../actions/ui';

export const AddNewItem = () => {

    const dispatch = useDispatch();

    const onCancel = () => {
        console.log('asdadsa');
        
        dispatch(uiCloseAddItem());
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
      };

  return (
    <div className="new-item-content">
        <h1>Add a new item</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-field-section">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Enter a name" />
            </div>

            <div className="form-field-section">
                <label htmlFor="note">Note (optional)</label>
                <textarea id="note" placeholder="Enter a note" />
            </div>

            <div className="form-field-section">
                <label htmlFor="image">Image (optional)</label>
                <input id="image" type="text" placeholder="Enter a url" />
            </div>

            <div className="form-field-section">
                <label htmlFor="category">Category</label>
                <div className="autocomplete-input">
                    <input id='category' type="text" placeholder='Enter a category' />
                    <button type='button'>
                        <span className="material-symbols-outlined with-customize">
                            close
                        </span>
                    </button>
                </div>

                <ul className='autocomplete-dropdown'>
                    <li>Fruit and vegetables</li>
                    <li>Meat and Fish</li>
                    <li>Beverages</li>
                </ul>
            </div>
            
            <div className="form-button-section">
                <button className="btn-cancel" 
                    onClick={() => onCancel()}
                    type='button'
                >
                        cancel
                </button>
                <button className="btn-save">Save</button>
            </div>

            
        </form>
    </div>
  )
}
