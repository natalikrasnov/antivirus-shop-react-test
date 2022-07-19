import './Search.style.scss'

function Search({getSearchData}) {

  return (
      <div className="search">
          <form onSubmit={getSearchData}>
            <input placeholder='search' type="text" />
            <button type='submit'>&#x1F50E;&#xFE0E;</button>
          </form>
    </div>
  ) 
}

export default Search
