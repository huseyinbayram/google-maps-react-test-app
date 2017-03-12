import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component {
  componentDidMount(){
    console.log('componentDidMount')

    const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=41.0082,28.9784&client_id=&client_secret='

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {
      const venues = response.body.response.venues
      console.log(JSON.stringify(venues))
    })

  }

  render(){
    const location = {
      lat: 41.0082,
      lng: 28.9784
    }
    const markers = [
      {
        location: {
          lat: 41.0082,
          lng: 28.9784
        }
      }
    ]
    return (
      <div>
        <div style={{width:600, height:600}}>
          <Map center={location} markers={markers} />
        </div>
        <Places />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
