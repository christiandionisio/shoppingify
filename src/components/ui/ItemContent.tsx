

export const ItemContent = () => {
  return (
    <div className="item-content">
        <button className="btn-back">
            <span className="material-symbols-outlined with-customize">
                close
            </span>
            <p>back</p>
        </button>
        <img src="https://www.clarin.com/img/2022/07/22/el-aguacate-o-palta-aporta___gUi8EzT2o_640x361__1.jpg" 
            alt="img-item" 
        />
        <div className="item-content-label">
            <h6>name</h6>
            <p>Avocado</p>
        </div>

        <div className="item-content-label">
            <h6>category</h6>
            <p>Fruit and vegetables</p>
        </div>

        <div className="item-content-label">
            <h6>note</h6>
            <p>
                Nutrient-dense foods are those that 
                provide substantial amounts of vitamins, 
                minerals and other nutrients with relatively 
                few calories. One-third of a medium avocado (50 g)
                has 80 calories and contributes nearly 20 vitamins 
                and minerals, making it a great nutrient-dense 
                food choice.
            </p>
        </div>

        <div className="button-section">
            <button className="btn-cancel">delete</button>
            <button className="btn-save">Add to list</button>
        </div>
    </div>
  )
}
