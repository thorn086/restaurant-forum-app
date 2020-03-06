import React from 'react';
import RestForumContext from './context'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import State from './pages/State/State'
import City from './pages/City/City_page'
import config from './config'
import Restpage from './pages/Rest-Page/Rest-page'
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
      error:null
    }
  }


  componentDidMount() {
     fetch(`${config.API_ENDPOINT}/states`)
   .then(stateResult=>{
     if (!stateResult.ok)
    throw new Error(stateResult.statusText)
   
   return stateResult.json()
   })

   .then(state => this.setState({states:state}))
   .catch(error =>{
     console.log(error)
   })
   
  }

  handleAddCity = city => {
    console.log(city)
    this.setState({
      cities: [...this.state.cities, city]
    })
    setTimeout(()=>console.log(this.state), 2000)
  }
  addCities=cities=>{
    this.setState({
  cities:cities
})
  }
  handleDeleteCity = cities =>{
    const deleteCity=this.state.cities.filter(city=>city.id !== cities)
    this.setState({
      cities:deleteCity
    })
  }

  render() {
    const restForumContext = {
      states: this.state.states,
      cities: this.state.cities,
      restaurants: this.state.restaurants,
      addCity: this.handleAddCity,
      deleteCity:this.handleDeleteCity,
      addCities:this.addCities,
      error: this.state.error
    }
    return (

      <RestForumContext.Provider value={restForumContext}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/states' component={State}></Route>
          <Route exact path='/states/:id' ><City /></Route>
          <Route exact path='/city/:id' ><Restpage /></Route>
          <Route exact path='/restaurant/:id' ><Info /></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>

      </RestForumContext.Provider>

    )
  }
}

export default App;
