import { useState, useEffect } from 'react';
import './App.css'
import StarshipList from './components/StarshipList/StarshipList';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import * as StarwarsAPI from './services/starshipService'
const App = () => {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])
  const [isSearched, setIsSearched] = useState('hidden')

  useEffect(()=>{

    const fetchDefaultData = async ()=>{
      const data = await StarwarsAPI.index()
      setStarshipsData(data)
      setDisplayedStarships(data)
    }
    fetchDefaultData()
  },[])

  const search = (searchInput) => {
  if (!searchInput.trim()) {
    setDisplayedStarships(starshipsData);
    setIsSearched('hidden');
    return;
  }

  const filteredData = starshipsData.filter(starship =>
    starship.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  setDisplayedStarships(filteredData);
  setIsSearched('');
};


  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch search={search} isSearched={isSearched} setIsSearched={setIsSearched}/>
    <StarshipList starshipsData={displayedStarships}/>
    </>
  );
}

export default App
