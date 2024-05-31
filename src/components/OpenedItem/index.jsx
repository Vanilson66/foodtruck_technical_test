import './style.css'

export default ({placeType, name, description, address}) => {

      return (
            <div className='opened_item_box'>
                  <img className='opened_item_url' src={"https://media.istockphoto.com/id/1166844765/pt/vetorial/food-truck.jpg?s=612x612&w=0&k=20&c=m-g8Ex-F99cp075vKx5KXwXxWPit_iuaGCBQyVpZOKI="} alt="Image Iten"/>
                  <span className='opened_item_url'>{placeType}</span>
                  <p className='opened_item_title'>{name}</p>
                  <p className='opened_item_url'>{description}</p>
                  <p className='opened_item_url'>{address}</p>
            </div>
      )
}