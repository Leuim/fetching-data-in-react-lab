import { useState, useEffect } from 'react';
import './App.css'
import StarshipList from './components/StarshipList/StarshipList';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import * as StarwarsAPI from './services/starshipService'
const App = () => {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDeisplayedStarships] = useState([])

  useEffect(()=>{

    const fetchDefaultData = async ()=>{
      const data = await StarwarsAPI.index()
      setStarshipsData(data)
      setDeisplayedStarships(data)
    }
    fetchDefaultData()
  },[])
  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch />
    <StarshipList starshipsData={starshipsData}/>
    </>
  );
}

export default App
