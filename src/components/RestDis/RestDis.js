import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import RestForumContext from '../../context'
import config from '../../config'
import AddRestaurant from '../AddRestaurant/AddRestaurant'
import './RestDis.css'

class RestDis extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = RestForumContext
    state={
        show:false
    }

    componentDidMount() {
        const { id } = this.props.match.params
        fetch(`${config.API_ENDPOINT}/city/${id}`)
            .then(res => {
                if (res.ok)
                    return res.json()
                throw new Error(res.statusText)

            })
            .then(restaurants => this.context.addRestaurants(restaurants))
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }
    showRestaurantAdd(){
        this.setState({
            show:!this.state.show
        })
    }


    handleRestaurantTitle() {
        const {show} =this.state
        if(show === false){
            return (
                'Add Restaurant'
            )
        }else{
            return(
                'Cancel'
            )
        }

    }

    handleHasRestaurants(){
        const {restaurants}  = this.context
        if(restaurants.length === 0){
            return(
                <ul className='state-list-items'>
                     <li className='state-items none'>
                        There are No Restaurants in this City, You can Add One!
                     </li>
                </ul>
            )
        }
        return(
            <ul className='state-list-items'>
            {restaurants.map((newRest,i)=>{
                return(
                <li key={i} className='state-items'>
                    <NavLink className='state-list-link'
                        to={`/restaurant/${newRest.id}`}>
                        <h3 className='state-name'>
                            {newRest.name}
                        </h3>
                    </NavLink>
                </li>
                )}
            )}
        </ul>
        )
    }

    render() {
       


        return (
            <div className='state_list rest'>
                {this.handleHasRestaurants()}
                {this.state.show ? <AddRestaurant /> :null}
                <button className=' back-btn rest' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                <button className=' back-btn add' tag='button' onClick={()=>this.showRestaurantAdd()}>{this.handleRestaurantTitle()}</button>

            </div>
        )
    }
}
export default withRouter(RestDis)