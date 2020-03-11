import React from 'react'
import{withRouter} from 'react-router-dom'
import RestForumContext from '../../context'
import './updateRestInfo.css'

class EditRestaurant extends React.Component {
  

    static contextType = RestForumContext

  
    /*updateRestaurant = (e) => {
        e.preventDefault()
        const id = this.props.match.params.id
        const { phone, address, comments }=e.target
    }*/
    render() {
       const {id}=this.props.match.params
       console.log(id)
        const {restaurants} = this.context
        console.log(restaurants)
        const [oldInfo] = restaurants.filter(restaurant => restaurant.id === parseInt(id))
        console.log(oldInfo)
        return (
            <form className="restaurant-edit-form">
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Restaurant Address</label>
                    <input type='text' id='address' name='restaurant-address'defaultValue={oldInfo.address}></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Restaurant Phone</label>
                    <input type='text' id='phone' name='restaurant-phone'defaultValue={oldInfo.phone}></input>
                </div>
                <div className='restaurant_field'>
                    <label htmlFor='restaurant_name'>Comments</label>
                    <textarea id='comments-edit' name='restaurant-comments'defaultValue={oldInfo.comments}></textarea>
                </div>
                <button type='submit' className='back-btn resForm'>Update</button>
            </form>
        )
    }

}
export default withRouter(EditRestaurant)