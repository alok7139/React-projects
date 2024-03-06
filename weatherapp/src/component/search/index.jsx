


export default function Search({search,setSearch,handlesearch}){


    return <div className="search-engine">
        <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={handlesearch}>Search</button>
    </div>
}