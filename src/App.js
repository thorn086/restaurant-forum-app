import React from 'react';
import RestForumContext from './context'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import STORE from './dummy-store'
import State from './pages/State/State'
import City from './pages/City/City_page'
import Restpage from './pages/Rest-Page/Rest-page'
import './App.css'
import Info from './pages/Info/Info'
import SignUp from './pages/SignUp/SignUp'
import Login from './components/Login/Login'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state: [],
      city: [],
      restaurants: []
    }
  }
  

  componentDidMount() {
    this.setState({
      ...STORE
    })
  }

  handleAddCity = city => {
    this.setState({
      ...this.state.city, city
    })
  }
 
  render() {
    const restForumContext = {
      state: STORE.state,
      city: STORE.city,
      restaurants: STORE.restaurants
    }
    return (
      
      <RestForumContext.Provider value={restForumContext}>
       <Switch>
       <Route exact path='/'><Home /></Route>
       <Route exact path='/state'  component={State}></Route>
       <Route exact path='/state/:id' ><City /></Route>
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
