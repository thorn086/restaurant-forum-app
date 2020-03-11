import React from 'react';
import RestForumContext from './context'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import State from './pages/State/State'
import City from './pages/City/City_page'
import config from './config'
import Restpage from './pages/Rest-Page/Rest-page'
import EditRestaurant from './components/updateRestInfo/updateRestInfo'
import './App.css'
import Info from './pages/Info/Info'
import SignUp from './pages/SignUp/SignUp'
import Login from './components/Login/Login'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [],
      cities: [],
      restaurants: [],
      error: null
    }
  }


  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/states`)
      .then(stateResult => {
        if (!stateResult.ok)
          throw new Error(stateResult.statusText)

        return stateResult.json()
      })

      .then(state => this.setState({ states: state }))
      .catch(error => {
        console.log(error)
      })

  }

  handleAddCity = city => {
    console.log(city)
    this.setState({
      cities: [...this.state.cities, city]
    })
    setTimeout(() => console.log(this.state), 2000)
  }

  handleAddRestaurants = restAdd => {
    this.setState({
      restaurants: [...this.state.restaurants, restAdd]
    })

  }

  addCities = cities => {
    this.setState({
      cities: cities
    })
  }
  addStates = states => {
    this.setState({
      states: states
    })
  }

  addRestaurants = restaurants => {
    this.setState({
      restaurants: restaurants
    })
  }
  handleDeleteCity = cityId => {
    const deletedCity = this.state.cities.filter(city => city.id !== parseInt(cityId))
    this.setState({
      cities: deletedCity
    })
  }
  handleDeleteRestaurant = restaurantId => {
    const deletedRestaurant = this.state.restaurants.filter(restaurant => restaurant.id !== parseInt(restaurantId))
    this.setState({
      restaurants: deletedRestaurant
    })
  }

  render() {
    const restForumContext = {
      states: this.state.states,
      cities: this.state.cities,
      restaurants: this.state.restaurants,
      addCity: this.handleAddCity,
      deleteCity: this.handleDeleteCity,
      deletedRestaurant: this.handleDeleteRestaurant,
      addCities: this.addCities,
      addRestaurants: this.addRestaurants,
      addStates: this.addStates,
      error: this.state.error,
      addRestaurant: this.handleAddRestaurants
    }

    return (

      <RestForumContext.Provider value={restForumContext}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/states' component={State}></Route>
          <Route exact path='/states/:id' ><City /></Route>
          <Route exact path='/city/:id' ><Restpage /></Route>
          <Route exact path='/restaurant/:id' component={Info}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/login' component={Login}></Route>
          <Route exact path='/editrestaurant/:id'><EditRestaurant /></Route>
        </Switch>

      </RestForumContext.Provider>

    )
  }
}

export default App;
