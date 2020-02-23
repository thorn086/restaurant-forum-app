
export const findState = (state=[], stateId) =>
 state.find(states => states.id === stateId)

export const findRestaurant = (restaurants=[], id) =>
  restaurants.find(eatery => eatery.id === id)

export const getCitiesByState = (city=[], id) => (
  (!id)
    ? city
    : city.filter(cities => cities.stateId === id)
)
export const getRestByCity = (restaurants=[], id) => (
  (!id)
    ? restaurants
    : restaurants.filter(restaurant => restaurant.cityId === id)
)

