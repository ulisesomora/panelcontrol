const API_URL = 'https://randomuser.me/api/?results=30'

const CACHE_KEY = 'users-cache'
const CACHE_TIME_KEY = 'users-cache-time'

const CACHE_DURATION = 1000 * 60 * 10

export async function getUsers() {

    const cachedUsers = localStorage.getItem(CACHE_KEY)
    const cacheTime = localStorage.getItem(CACHE_TIME_KEY)

    const isCacheValid = cachedUsers && cacheTime && Date.now() - Number(cacheTime) < CACHE_DURATION

    // si los datos estan en el cache, los envia
    if(isCacheValid){
        return JSON.parse(cachedUsers)
    }

    // si no vamos hacer el llamado a la API
    const response = await fetch (API_URL)

    if(!response.ok){
        throw new Error("Error obteniendo usarios")
    }
    const data = await response.json()

    //guardamos los datos en el localstorage, para el cache
    localStorage.setItem(CACHE_KEY, JSON.stringify(data.results))
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString())

    return data.results
}