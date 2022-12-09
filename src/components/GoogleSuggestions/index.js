import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    valueSuggestion: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  searchItemValue = suggestion => {
    this.setState({
      valueSuggestion: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput, valueSuggestion} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo-style"
        />
        <div className="search-bax">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="icon-style"
            />
            <input
              type="search"
              className="search-style"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={valueSuggestion}
            />
          </div>
          <ul className="list-styles">
            {searchResults.map(item => (
              <SuggestionItem
                suggestions={item}
                searchItemValue={this.searchItemValue}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
