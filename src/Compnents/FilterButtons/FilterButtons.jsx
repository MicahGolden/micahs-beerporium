import './FilterButtons.css'
import beers from '../../Data/BeerData';
import { useState } from 'react';
const FilterButtons = () => {
  let displayWhich = document.getElementById("display");
  const [searchTerm, setSearchTerm] = useState('')

  let ABV = false;
  let classic = false;
  let acidic = false;

  //#region //Switching Functions
  const filterClassic = () => {
    if (classic = false) {
      classic = true;
    }
   
  }
  const filterABV = () => {
    if (ABV = false) {
      ABV = true;
    }
  }
  const filterAcidic = () => {
    if (acidic = false) {
      acidic = true;
    }
    else {
      acidic = false;
    }
  }

  
  
//#endregion


  return (
  <>

  <input type="text" placeholder="Search here!" onChange={event => {setSearchTerm(event.target.value)}}/>
  <div className="checkboxes">
      <div className = "classic-range">
        <input onClick={filterClassic} type="checkbox"></input>
        <p>Classic Range</p>
      </div>
      <div className = "ABV-range">
        <input onClick={filterABV} type="checkbox"></input>
        <p>High ABV</p>
      </div>
      <div className = "acidic-range">
        <input onClick={filterAcidic} type="checkbox"></input>
        <p>Acidic Range</p>
      </div>
  </div>
  <div className='beer-grid'>
    {beers.filter((beer) => {
       if (searchTerm === "") {
        return beer
       } else if (beer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return beer
       }
       else if (beer.name.toLowerCase().includes(searchTerm.toLowerCase()) && (ABV == true)) {
        return beer.abv > 21
       }
       else if (beer.name.toLowerCase().includes(searchTerm.toLowerCase()) && (acidic == false)) {
        return beer.ph > 21
       }
      }).map((beer, key) =>{
      return <div><p>{beer.name}</p><img src={beer.image_url} alt="none"/><p>{beer.description}</p><p> ABV: {beer.abv}</p><p>ph: {beer.ph}</p><p>Introduced: {beer.first_brewed}</p></div>
    }).slice(0,6)}
    </div>
    
  </>
  )
}

export default FilterButtons;