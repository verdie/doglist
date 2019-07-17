import React, {Component} from 'react'
import * as request from 'superagent'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {
    state = { dogBreeds: null }
    

    componentDidMount() {
        request
          .get('https://dog.ceo/api/breeds/list/all')
          .then(res=>this.updateBreeds(Object.keys(res.body.message)))
          .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
        dogBreeds: breeds
        })
    }

    render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        { this.state.dogBreeds === null ? 'Loading...' :<ul>
            { this.state.dogBreeds.map(breed => 
            <li key={breed}>
                <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
            </li>) }
        </ul> }
        
      </div>
    )
  }
}