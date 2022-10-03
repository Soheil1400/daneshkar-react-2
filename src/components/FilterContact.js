const filterData = [
    {id: 1, title: 'allContact'},
    {id: 2, title: 'favoriteContact'},
    {id: 3, title: 'unFavoriteContact'},
]

const FilterContact = ({filter, setFilter}) => {
    const handleFilterBtn = title => {
        setFilter(title)
    }
    return(
        <div>
            <div>
                Filter
            </div>
            <div>
                {filterData.map(filterBtn => (
                    <button onClick={() => handleFilterBtn(filterBtn.title)}
                            style={{backgroundColor: filterBtn.title === filter ? 'red' : 'white'}}>
                        {filterBtn.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterContact