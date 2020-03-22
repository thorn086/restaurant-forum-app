
export const findState = (states=[], name) =>
 states.filter(state => name === state.id);

export const findRestaurant = (restaurants=[], id) =>
  restaurants.find(eatery => eatery.id === id);

export const getCitiesByState = (city=[], id) => (
  (!id) ? city
    : city.filter(cities => cities.state_id === id)
);
export const getRestByCity = (restaurants=[], id) => (
  (!id) ? restaurants
    : restaurants.filter(restaurant => restaurant.city_id === id)
);
export const getUserEmail =(users=[], id)=>{
  users.filter(user=>user.user_email === id);};


