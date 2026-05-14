const API_URL = 'https://randomuser.me/api/'

export async function getUsers() {
    const response = await fetch (API_URL)
    if(!response.ok){
        throw new Error("Error obteniendo usarios")
    }
    const data = await response.json()

    return data.results

}