import React from 'react'
import config from '../../config'
import { withRouter } from 'react-router-dom'
import TokenService from '../../services/token-services'
import restForumContext from '../../context'
import './AddRestaurant.css'

class AddRestaurant extends React.Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
        match: {
            params: {}
        }
    }
    static contextType = restForumContext

    handleSubmit = event => {
        event.preventDefault()
        const { id } = this.props.match.params
        const stateName=event.target['restaurant-state'].value.split(' ')
       
     
        const newRestaurant = {
            name: event.target['restaurant-input'].value,
            address: event.target['restaurant-address'].value,
            phone: event.target['restaurant-phone'].value,
            state_id: parseInt(stateName[0]),
            city_id: id,
            comments:event.target['restaurant-comments'].value,
        }

        fetch(`${config.API_ENDPOINT}/city/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newRestaurant),
        })
            .then(results => {
                if (!results.ok)
                    return results.json().then(e => Promise.reject(e))
                return results.json()
            })
            .then(restaurant => {
                this.context.addRestaurant(restaurant)
                window.location.reload()
            })
            .catch(error => {
                console.error({ error })
            })
    }


    render() {
        return (
            <form className="restaurant-form" onSubmit={this.handleSubmit}>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Restaurant Name</label>
                    <input type='text' id='resName' name='restaurant-input'></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Restaurant Address</label>
                    <input type='text' id='address' name='restaurant-address'></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Restaurant Phone</label>
                    <input type='text' id='phone' name='restaurant-phone'></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Restaurant State</label>
                    <select type='text' id='state' name='restaurant-state'>
                        <option>1 Alabama</option>
                        <option>2 Alaska</option>
                        <option>3 Arizona</option>
                        <option>4 Arkansas</option>
                        <option>5 California</option>
                        <option>6 Colorado</option>
                        <option>7 Connecticut</option>
                        <option>8 Delaware</option>
                        <option>9 Florida</option>
                        <option>10 Georgia</option>
                        <option>11 Hawaii</option>
                        <option>12 Idaho</option>
                        <option>13 Illinois</option>
                        <option>14 Indiana</option>
                        <option>15 Iowa</option>
                        <option>16 Kansas</option>
                        <option>17 Kentucky</option>
                        <option>18 Louisiana</option>
                        <option>19 Maine</option>
                        <option>20 Maryland</option>
                        <option>21 Massachusetts</option>
                        <option>22 Michigan</option>
                        <option>23 Minnesota</option>
                        <option>24 Mississippi</option>
                        <option>25 Missouri</option>
                        <option>26 Montana</option>
                        <option>27 Nebraska</option>
                        <option>28 Nevada</option>
                        <option>29 New Hampshire</option>
                        <option>30 New Jersey</option>
                        <option>31 New Mexico</option>
                        <option>32 New York</option>
                        <option>33 North Carolina</option>
                        <option>34 North Dekota</option>
                        <option>35 Ohio</option>
                        <option>36 Oklahoma</option>
                        <option>37 Oregon</option>
                        <option>38 Pensylvania</option>
                        <option>39 Rhode Island</option>
                        <option>40 South Carolina</option>
                        <option>41 South Dakota</option>
                        <option>42 Tennessee</option>
                        <option>43 Texas</option>
                        <option>44 Utah</option>
                        <option>45 Vermont</option>
                        <option>46 Verginia</option>
                        <option>47 Washington</option>
                        <option>48 West Virginia</option>
                        <option>49 Wisconsin</option>
                        <option>50 Wyoming</option>
                    </select>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Comments</label>
                    <textarea id='comments' name='restaurant-comments'></textarea>
                </div>
                <button type='submit' className='back-btn resForm'>Add</button>
            </form>
        )
    }
}
export default withRouter(AddRestaurant)