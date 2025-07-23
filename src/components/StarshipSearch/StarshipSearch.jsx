import { useState } from "react"

const StarshipSearch = ({search, isSearched,setIsSearched})=>{
    const [starshipName, setStarshipName] = useState('')
    const [lastTerm, setLastTerm] = useState('')
    const handleChange = (event)=>{
        setStarshipName(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        search(starshipName)
        setStarshipName('')
        setLastTerm(starshipName)
    }
    const handleResetSearch = (event) =>{
        event.preventDefault()
        setIsSearched('hidden')
        search('')
    }
    return(
        <>
        <h2>Search</h2>
        <p>last search term: {lastTerm  ? lastTerm : 'Search for a starship by name.'}</p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="starshipName">Search Term: </label>
        <input type="text" name="starshipName" id="starshipName" value={starshipName} onChange={handleChange}/>
        <button type="submit">Search</button>
        <button type="button" onClick={handleResetSearch} hidden={isSearched === 'hidden'}>Reset</button>
        </form>

        </>
    )
}

export default StarshipSearch