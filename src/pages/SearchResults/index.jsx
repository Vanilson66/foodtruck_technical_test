import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { filterInput } from '../../utils/FilterTools'
import { getUrlParams } from '../../utils/UrlTools'
import readCSV from '../../utils/readCSV'
import './style.css'

import Header from '../../components/HeaderBar'
import InputSearch from '../../components/InputSearch'
import OpenedItem from '../../components/OpenedItem'
import { renderResults } from './RenderLinks'

/**
 * Gets the data from the url, 
 * loads the csv file,
 * filters it and map the results.
 * 
 */

export default () => {
      const searchInput = getUrlParams("q")
      const [filteredTrucks, setFilteredTrucks] = useState([])
      const [truckSelected, setTruckSelected] = useState(null)

      useEffect( () => {
            const fetchData = async () => {
                  try {
                        const csvData = await readCSV("http://localhost:5173/foodTrucks.csv");

                        if(csvData) {
                              const foodTruks = filterInput(csvData, searchInput);
                              setFilteredTrucks(foodTruks);
                        }
                  } catch (error) {
                        console.error('Error on load csv data:', error);
                  }
            }
        
            fetchData();
            return () => {}
      }, [searchInput]);

      return (
            <section className="search_results_page">
                  <Header>
                        <Link to='/'>
                              <img
                                    src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                                    alt="google_logo" 
                                    style={{ margin: "10px 25px" }}
                                    width={80}
                              />
                        </Link>
                        <InputSearch initialValue={searchInput}/>
                  </Header>
                  
                  <section className="results_container">
                        <div className="list_links_results">
                              {renderResults({searchInput, filteredTrucks, setTruckSelected})}
                        </div>


                        {truckSelected && (
                              <div className="link_open_display" onClick={() => setTruckSelected(null)}>
                                    <OpenedItem
                                          placeType={truckSelected.placeType}
                                          name={truckSelected.name}
                                          description={truckSelected.description}
                                          address={truckSelected.address}
                                    /> 
                              </div>
                        )}
                  </section>  
            </section>
      )
}