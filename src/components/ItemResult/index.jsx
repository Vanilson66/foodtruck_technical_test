import './style.css';

export const ItemResult = (props) => {
      return (
            <div className="item_result">
                  <p className='item_url'>{props.placeType}</p>
                  <p className='item_title' onClick={() => props.openAside(props)}>{props.name}</p>
                  <p className='item_description'>{props.description}</p>
            </div>
      )
}

export const ItemResultNotFind = ({input, sujestions}) => {
      return (
            <div className="item_result">
                  <p>No results found for '{input || ""}'</p>
                  <p>Try looking for: <strong>tacos, hot dogs, coffee, snacks.</strong></p>
            </div>
      )
}

export const ItemEmptyPlace = ({sujestions}) => {
      return (
            <div className="item_result">
                  <p>Try looking for: <strong>tacos, hot dogs, coffee, snacks.</strong></p>
            </div>
      )
}