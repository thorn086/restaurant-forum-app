import React from 'react';

const RestForumContext = React.createContext({
    states:[],
    city:[],
    restaurants:[],
    user:{},
    userInfo:()=>{},
    addCity: ()=>{},
      deleteCity:()=>{},
      deletedRestaurant:()=>{} ,
      addCities:()=>{} ,
      addRestaurants:()=>{} ,
      addStates:()=>{} ,
      error:()=>{} ,
      addRestaurant:()=>{}
});

export default RestForumContext