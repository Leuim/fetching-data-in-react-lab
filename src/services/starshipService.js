const API_URL = 'https://swapi.info/api/starships'

const index = async () =>{
    try {
        const res = await fetch(API_URL)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export {index}