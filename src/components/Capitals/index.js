import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onChangeCapitalInput = event => {
    this.setState({countryId: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
  }

  getCountry = () => {
    const {countryId} = this.state
    const isActiveCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === countryId,
    )
    return isActiveCountryAndCapital.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountry(countryId)
    return (
      <div className="bg-container">
        <form onSubmit={this.onSubmit} className="card-container">
          <div className="content-container">
            <h1 className="title">Countries And Capitals</h1>
            <div>
              <select
                className="user-input"
                id={countryId}
                value={countryId}
                onChange={this.onChangeCapitalInput}
              >
                {countryAndCapitalsList.map(eachItem => (
                  <option value={eachItem.id} key={eachItem.id}>
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <label htmlFor={countryId}>is capital of which country?</label>
            </div>
            <p className="country-name">{country}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default Capitals
// Write your code here
