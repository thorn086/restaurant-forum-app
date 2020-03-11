import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { withRouter } from 'react-router-dom'
import config from '../../config'
import restForumContext from '../../context'
import CityDis from '../../components/CityDis/CityDis'

class City extends React.Component {
static contextType = restForumContext
state={
    error:null
}


    componentDidMount() {
        const { id } = this.props.match.params
        fetch(`${config.API_ENDPOINT}/states/${id}`)
            .then(res => {
                if (res.ok)
                    return res.json()
                throw new Error(res.statusText)

            })
            .then(cities => this.context.addCities(cities))
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }



    render() {
      
        const {error} = this.state
    
        return (
            <div className="state_page">
                <h2 className="state_title">Choose your City</h2>
                <NavBar />
                <div className='city-nav'>
                    <CityDis error={error}/>
                </div>
            </div>

        )
    }
}
export default withRouter(City)