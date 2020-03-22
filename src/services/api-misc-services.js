import config from '../config'
import TokenService from './token-services'

const MiscApiServices={
 getAllStates(){
     return fetch(`${config.API_ENDPOINT}/states`,{
         method:'GET',
         headers:{
            'Authorization': `bearer ${TokenService.getAuthToken()}`
         }
     })
     .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
 },
 getAllRestaurants(){
    return fetch(`${config.API_ENDPOINT}/restaurant`,{
        method:'GET',
        headers:{
           'Authorization': `bearer ${TokenService.getAuthToken()}`
        }
    })
    .then(res =>
       (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
     )
},
getRestaurantById(id){
    return fetch(`${config.API_ENDPOINT}/restaurant/${id}`,{
        method:'GET',
        headers:{
           'Authorization': `bearer ${TokenService.getAuthToken()}`
        }
    })
    .then(res =>
       (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
     )
},
updateRestaurant(id, updatedRestaurant) {
    return fetch(`${config.API_ENDPOINT}/restaurant/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedRestaurant)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
    )
  }
}

export default MiscApiServices