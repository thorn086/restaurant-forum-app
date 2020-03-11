import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import AddCity from '../../components/AddCity/AddCity'
import restForumContext from '../../context'
import config from '../../config'
import TokenService from '../../services/token-services'
import './CityDis.css'


class CityDis extends React.Component {
    static contextType = restForumContext
    state={
        show:false
    }

    handleDeleteCity=event=>{
        event.preventDefault()
        const citySelected = event.target.value
        
        fetch(`${config.API_ENDPOINT}/states/${citySelected}`,{
            method:'DELETE',
            headers:{
            'content-type':'application/json',
            'authorization':`bearer ${TokenService.getAuthToken()}`
        },
    })
        .then(result => {
            if (!result.ok)
                return result.json().then(event => Promise.reject(event))
        })
        .then(()=> {
           this.context.deleteCity(citySelected)
            
        })
        .catch(error => {
            console.log({ error })
        })
    }

    hasError() {
        const { error } = this.props
        return (
            <ul className='state-list-items'>
                <li key={error} className='state-items'>
                    <h3 className='error-name'>{error}</h3>
                </li>
            </ul>
        )
    }

   
    hasNoError() {
        const { cities } = this.context
        console.log(cities)
        return (
            <ul className='state-list-items'>
                {cities.map((newCity, i) =>{
                    return (
                        <li key={i} className='state-items'>
                            <NavLink className='state-list-link'
                                to={`/city/${newCity.id}`}>
                                <h3 className='state-name'>
                                    {newCity.name}
                                </h3>
                            </NavLink> 
                            <button value={newCity.id} className='delete-btn' type='button' onClick={this.handleDeleteCity}>Delete</button>

                        </li>)
                })}
            </ul>
        )
    }
    showCityAdd(){
        this.setState({
            show:!this.state.show
        })
    }


    handleCityTitle() {
        const {show} =this.state
        if(show === false){
            return (
                'Add City'
            )
        }else{
            return(
                'Cancel'
            )
        }

    }
    render() {
        const { error } = this.props
       
        return (
            <div className='state_list'>
                {(error === null) ? this.hasNoError() : this.hasError()}
                {this.state.show ? <AddCity /> :null}
                <button className=' back-btn' tag='button' onClick={()=> this.props.history.goBack()}>Back</button>
                <button className=' back-btn' tag='button' onClick={()=> this.showCityAdd()}>{this.handleCityTitle()}</button>
                
            </div>
        )
    }
}
export default withRouter(CityDis)