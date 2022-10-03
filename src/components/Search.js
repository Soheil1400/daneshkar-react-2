const Search = ({search, setSearch}) => {
    const handleSearch = e => {
        setSearch(e.target.value)
    }
    return (
        <div>
            <div>
                Search :
            </div>
            <div>
                <input onChange={handleSearch} value={search}/>
            </div>
        </div>
    )
}

export default Search