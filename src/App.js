import './App.css';
import {useState} from "react";

const filterData = [
    {id: 1, title: 'allContact'},
    {id: 2, title: 'favoriteContact'},
    {id: 3, title: 'unFavoriteContact'},
]

function App() {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'soheil',
            age: 21,
            email: 'soheil@gmail.com',
            number: '09197164090',
            favorite: 'favoriteContact',
            country: 'iran'
        },
        {
            id: 2,
            name: 'ali',
            age: 18,
            email: 'ali@gmail.com',
            number: '09127164090',
            favorite: 'unFavoriteContact',
            country: 'usa'
        },
    ])
    const [showMessage, setShowMessage] = useState('none')
    const [id, setId] = useState('0')
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('allContact')
    const [form, setForm] = useState({
        id: Math.floor(Math.random()*1000),
        name: '',
        age: 0,
        email: '',
        number: '',
        favorite: '',
        country: ''
    })

    const handleDelete = () => {
        setContacts(contacts.filter(contact => contact.id !== id))
        handleDisMessage()
    }

    const handleShowMessage = id => {
        setShowMessage('flex')
        setId(id)
    }

    const handleDisMessage = () => {
        setShowMessage('none')
    }

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const handleFilterBtn = title => {
        setFilter(title)
    }

    const handleForm = e => {
      setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        setContacts([...contacts,form])
        setForm({
            id: Math.floor(Math.random()*1000),
            name: '',
            age: 0,
            email: '',
            number: '',
            favorite: '',
            country: ''
        })
    }

    return (
        <div>

            <div>
                <div style={{display: showMessage}}>
                    <p>
                        Are you sure to delete contact?
                    </p>
                    <button onClick={handleDelete}>
                        yes
                    </button>
                    <button onClick={handleDisMessage}>
                        no
                    </button>
                </div>
            </div>
            <div>
                <div>
                    add new contact :
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>name</label>
                        <input name={'name'} onChange={handleForm} value={form.name}/>
                        <label>age</label>
                        <input type={'number'} name={'age'} onChange={handleForm} value={form.age}/>
                        <label>email</label>
                        <input type={'email'} name={'email'} onChange={handleForm} value={form.email}/>
                        <label>number</label>
                        <input type={'number'} name={'number'} onChange={handleForm} value={form.number}/>
                        <label>favorite</label>
                        <select name={'favorite'} onChange={handleForm} value={form.favorite}>
                            <option value="favoriteContact">favoriteContact</option>
                            <option value="unFavoriteContact">unFavoriteContact</option>
                        </select>
                        <label>country</label>
                        <input name={'country'} onChange={handleForm} value={form.country}/>
                        <button type={'submit'}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    Search :
                </div>
                <div>
                    <input onChange={handleSearch} value={search}/>
                </div>
            </div>
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
            {contacts.filter(contact => contact.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allContact' ? true : contact.favorite === filter)).map(contact => (
                <div style={{border: '1px solid #000', borderRadius: '8px', margin: '10px', padding: '10px'}}>
                    <div>
                        <div style={{width: '60px', height: '60px', borderRadius: '50%'}}>
                            <img src={`https://avatars.dicebear.com/api/avataaars/:${contact.id}.svg`}/>
                        </div>
                    </div>
                    <div>
                        name: {contact.name}
                    </div>
                    <div>
                        age: {contact.age}
                    </div>
                    <div>
                        email: {contact.email}
                    </div>
                    <div>
                        number: {contact.number}
                    </div>
                    <div>
                        favorite: {contact.favorite}
                    </div>
                    <div>
                        country: {contact.country}
                    </div>
                    <button onClick={() => handleShowMessage(contact.id)}>
                        delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;
