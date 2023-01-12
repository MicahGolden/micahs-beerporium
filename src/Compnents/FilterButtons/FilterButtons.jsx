import './FilterButtons.css'
import beers from '../../Data/BeerData';
import { useState } from 'react';
const FilterButtons = () => {
  let displayWhich = document.getElementById("display");
  let whichArr = 0;
  const [searchTerm, setSearchTerm] = useState('')
  //#region //Switching Functions
  const setClassic = () => {
    if (whichArr === 0){
      whichArr = 0
    }
    else {
    }
    displayWhich.innerText = whichArr
  }
  const setABV = () => {
    if (whichArr === 1){
      whichArr = 0
    }
    else {
      whichArr = 1;
    }
    displayWhich.innerText = whichArr
  }
  const setAcidic = () => {
    if (whichArr === 2){
      whichArr = 0
    }
    else {
      whichArr = 2;
    }
    displayWhich.innerText = whichArr
  }
//#endregion


  return (
  <>
  
  <input type="text" placeholder="Search here!" onChange={event => {setSearchTerm(event.target.value)}}/>
  <div className="checkboxes">
      <div className = "classic-range">
        <input onClick={setClassic} type="checkbox"></input>
        <p>Classic Range</p>
      </div>
      <div className = "ABV-range">
        <input onClick={setABV} type="checkbox"></input>
        <p>High ABV</p>
      </div>
      <div className = "acidic-range">
        <input onClick={setAcidic} type="checkbox"></input>
        <p>Acidic Range</p>
      </div>
    <h1 id='display'>{whichArr}</h1>
  </div>
  <div className='beer-grid'>
    {beers.filter((beer) => {
       if (searchTerm == "") {
        return beer
       } else if (beer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return beer
       }
      }).map((beer, key) =>{
      return <div><p>{beer.name}</p><a>{beer.image_url}</a><p>{beer.description}</p></div>
    })}
    </div>
  </>
  )
}

export default FilterButtons;