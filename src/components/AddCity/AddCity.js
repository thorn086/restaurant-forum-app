import React from 'react';
import config from '../../config';
import { withRouter } from 'react-router-dom';
import TokenService from '../../services/token-services';
import restForumContext from '../../context';
import './AddCity.css';

class AddCity extends React.Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
        match: {
            params: {}
        }
    }

    static contextType = restForumContext

   


    handleSubmit = event => {
        event.preventDefault()
        const { id } = this.props.match.params;
        const newCity = {
            name: event.target['city-input'].value,
            state_id: id,
            author: `${TokenService.getUserId()}`
        };
        //adds new city to selected state
        fetch(`${config.API_ENDPOINT}/states/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newCity),
        })
            .then(results => {
                if (!results.ok)
                    return results.json().then(e => Promise.reject(e));
                return results.json();
            })
            .then(city => {
                this.context.addCity(city);
                this.props.show();
                this.props.history.push(`/states/${id}`);
                
            })
            .catch(error => {
                console.error({ error });
            })
    }


    render() {
        
        return (
            <form className="city-form" onSubmit={this.handleSubmit}>
                <div className='city_field'>
                    <label htmlFor='city_name'>City Name</label>
                    <input type='text' id='name' name='city-input' placeholder='City Name' required></input>
                </div>
                <div className='author'>
                    <p>City added by: {TokenService.getUserId()}</p>
                </div>

                <button type='submit' className='back-btn city_form'>Add</button>
            </form>
        )
    }
}
export default withRouter(AddCity)