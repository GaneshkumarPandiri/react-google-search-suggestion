import './index.css'

const SuggestionItem = props => {
  const {suggestions, searchItemValue} = props
  const {id, suggestion} = suggestions
  console.log(id)

  const searchItem = () => {
    searchItemValue(suggestion)
  }

  return (
    <li className="li-style">
      <p>{suggestion}</p>
      <button type="button" className="button-style" onClick={searchItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="icon-style"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
