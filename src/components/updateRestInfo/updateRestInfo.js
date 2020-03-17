import React from 'react'
import { withRouter } from 'react-router-dom'
import TokenService from '../../services/token-services'
import NavBar from '../NavBar/NavBar'
import RestForumContext from '../../context'
import MiscApiServices from '../../services/api-misc-services'
import './updateRestInfo.css'

class EditRestaurant extends React.Component {


    static contextType = RestForumContext


    updateRestaurant = (e) => {
        e.preventDefault()
        const userId = Number(TokenService.getUserId())
        const id = this.props.match.params.id
        const { phone_edit, address_edit, comments_edit, author = userId } = e.target

        let updatedRestaurant = {}
        if (phone_edit.value !== '' && phone_edit.value !== null) {
            updatedRestaurant.phone = phone_edit.value
        }
        if (address_edit.value !== '' && address_edit.value !== null) {
            updatedRestaurant.address = address_edit.value
        }
        if (comments_edit.value !== '' && comments_edit.value !== null) {
            updatedRestaurant.comments = comments_edit.value
        }
        if (author.value !== '' && author.value !== null) {
            updatedRestaurant.author = author.value
        }

        updatedRestaurant.id = id

        MiscApiServices.updateRestaurant(id, updatedRestaurant)
            .then(restaurant => {
                this.context.addRestaurant(restaurant)
            })
            .then(() => {
                this.props.history.push(`/restaurant/${id}`)
            })
            .catch(error => {
                console.log(error)
            })

    }
    render() {
        const { id } = this.props.match.params

        const { restaurants } = this.context

        const [oldInfo] = restaurants.filter(restaurant => restaurant.id === parseInt(id))

        return (
            <div className='rest-info-edit'>
                <NavBar />
                <div className='rest-info-main'>
                    <h2 className='rest-info-title'>
                        Update Restaurant
                            </h2>
                </div>
                <form className="restaurant-edit-form" onSubmit={(e) => this.updateRestaurant(e)}>
                    <div className='restaurant_field_edit'>
                        <label htmlFor='restaurant_name' className='edit_label'>Restaurant Address</label>
                        <input type='text' id='address_edit' name='restaurant-address' defaultValue={oldInfo.address}></input>
                    </div>
                    <div className='restaurant_field_edit'>
                        <label htmlFor='restaurant_name' className='edit_label'>Restaurant Phone</label>
                        <input type='text' id='phone_edit' name='restaurant-phone' defaultValue={oldInfo.phone}></input>
                    </div>
                    <div className='restaurant_field_edit comments'>
                        <label htmlFor='restaurant_name' className='edit_label_comments'>Comments</label>
                        <textarea id='comments_edit' name='restaurant-comments' defaultValue={oldInfo.comments}></textarea>
                    </div>
                    <div className='author'>
                        <p>City edited by: {TokenService.getUserId()}</p>
                    </div>
                    <button type='submit' className='back-btn editForm'>Update</button>
                    <button className=' back-btn editForm' tag='button' onClick={() => this.props.history.goBack()}>Back</button>
                </form>
            </div>
        )
    }

}
export default withRouter(EditRestaurant)