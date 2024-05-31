import { ItemEmptyPlace, ItemResult, ItemResultNotFind } from '../../components/ItemResult'

/**
 * If there are results for the search it would render the results
 *  if not it would render an error component
 * 
 */

export const renderResults = ({searchInput, filteredTrucks, setTruckSelected}) => {
      if(!searchInput) return <ItemEmptyPlace/>
      
      if (!filteredTrucks.length) return <ItemResultNotFind input={searchInput} />

      return filteredTrucks.map((item) => (
            <ItemResult
                  key={Math.random()}
                  placeType={item.FacilityType}
                  name={item.Applicant}
                  address={item.Address}
                  description={item.FoodItems}
                  openAside={setTruckSelected}
            />))
}