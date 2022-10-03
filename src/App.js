import './App.css';
import {useEffect, useState} from "react";
import Message from "./components/Message";
import ContactForm from "./components/ContactForm";
import Search from "./components/Search";
import FilterContact from "./components/FilterContact";
import TableContact from "./components/TableContact";
import TestApi from "./components/TestApi";


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
    const [state, setState] = useState('submit')
    const [form, setForm] = useState({
        id: Math.floor(Math.random() * 1000),
        name: '',
        age: 0,
        email: '',
        number: '',
        favorite: '',
        country: ''
    })

    useEffect(() => {

    }, [])

    //[] => first render
    //[search] => console.log

    return (
        <div>
            <Message contacts={contacts}
                     setContacts={setContacts}
                     showMessage={showMessage}
                     setShowMessage={setShowMessage}
                     id={id}
            />
            <ContactForm form={form}
                         setForm={setForm}
                         state={state}
                         setState={setState}
                         contacts={contacts}
                         setContacts={setContacts}
            />
            <Search search={search} setSearch={setSearch}/>
            <FilterContact filter={filter} setFilter={setFilter}/>
            <TableContact contacts={contacts}
                          filter={filter}
                          search={search}
                          setState={setState}
                          setForm={setForm}
                          setId={setId}
                          setShowMessage={setShowMessage}
            />
            <TestApi/>
        </div>
    );
}

export default App;
