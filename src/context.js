import React from 'react'

const RestForumContext = React.createContext({
    states:[],
    city:[],
    restaurants:[],
    addCity: ()=>{},
      deleteCity:()=>{},
      deletedRestaurant:()=>{} ,
      addCities:()=>{} ,
      addRestaurants:()=>{} ,
      addStates:()=>{} ,
      error:()=>{} ,
      addRestaurant:()=>{}
})

export default RestForumContext