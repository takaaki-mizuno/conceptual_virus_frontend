export async function GetCreatures() {
    try {
        const response = await fetch('http://localhost:8100/api/dashboard/creatures', {
            method: 'GET',
//            mode: 'no-cors'
        })
        console.log(response)
        if (response.ok) {
            const {data} = await response.json()
            console.log(data)
            const creatures = data?.creatures
            if (creatures) {
                return creatures
            } else {
                return [] //Promise.reject(new Error('Something Wrong'))
            }
        } else {
            return []
        }
    } catch( err) {
        return Promise.reject(err)
    }

}
