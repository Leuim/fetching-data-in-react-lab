import { useState } from "react"

const StarshipSearch = ({search})=>{
    const [starshipName, setStarshipName] = useState('')
    const handleChange= (event)=>{
        setStarshipName(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        search(starshipName)
        setStarshipName('')
    }
    return(
        <>
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="starshipName">Search Term: </label>
        <input type="text" name="starshipName" id="starshitName" value={starshipName} onChange={handleChange}/>
        <button type="submit">Search</button>
        </form>
        </>
    )
}

export default StarshipSearch