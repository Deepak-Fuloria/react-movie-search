import React,{useContext,useState} from 'react'
import { appContext } from './Context'

const Search = () => {
  const{setQuery,isError}=useContext(appContext)
  const[search,setSearch]=useState("")
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="search-button" onClick={()=>{setQuery(search)}}>search</button>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search
