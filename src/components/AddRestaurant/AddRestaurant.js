import React from 'react';
import config from '../../config';
import { withRouter } from 'react-router-dom';
import TokenService from '../../services/token-services';
import restForumContext from '../../context';
import './AddRestaurant.css';
import validate from './ValError';
class AddRestaurant extends React.Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = restForumContext

    state={   
    errors: []
    }
    handleSubmit = event => {
        event.preventDefault()
        const { id } = this.props.match.params;
        const stateName=event.target['restaurant-state'].value.split(' ');
        const name =event.target['restaurant-name'].value;
        const address= event.target['restaurant-address'].value;
        const phone= event.target['restaurant-phone'].value;
        const comments=event.target['restaurant-comments'].value;
        
        const errors = validate(name,address,comments);
        if(errors.length > 0){
            this.setState({errors})
            return;
        }

        const newRestaurant = {
            name,
            address,
            phone,
            state_id: parseInt(stateName[0]),
            city_id: id,
            comments,
        };

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
                    return results.json().then(e => Promise.reject(e));
                return results.json();
            })
            .then(restaurant => {
                this.context.addRestaurant(restaurant);
                window.location.reload();
            })
            .catch(error => {
                console.error({ error });
            })
    }


    render() {
        const {errors} = this.state
        const valErrors = errors.map(error => (<p key={error}><span className='error-title'>Error:</span>{error}</p>))

        return (
            
            <form className="restaurant-form" onSubmit={this.handleSubmit}>
                <div className='error_field' style= {{display: (errors < 1) ? 'none':'block'}} >{valErrors}</div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant-name'>Restaurant Name</label>
                    <input type='text' id='restaurant-name' name='restaurant-name'placeholder='Enter Restaurant Name'></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant-address'>Restaurant Address</label>
                    <input type='text' id='restaurant-address' name='restaurant-address' placeholder='Enter Restaurant Address' ></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant-phone'>Restaurant Phone</label>
                    <input type='tel' id='restaurant-phone' pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$" x-autocompletetype="tel" name='restaurant-phone' placeholder='555-555-5555' autofocus></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant-state'>Restaurant State</label>
                    <select type='text' id='restaurant-state' name='restaurant-state' >
                        <option>0 Select a state</option>
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
                    <label htmlFor='restaurant_comments'><span className='comments_rest'>Comments</span></label>
                    <textarea id='restaurant_comments' name='restaurant-comments' placeholder='What shoule we know about this Restaurant?'></textarea>
                </div>
                <button type='submit' className='back-btn resForm'>Add</button>
            </form>
        )
    }
}
export default withRouter(AddRestaurant)