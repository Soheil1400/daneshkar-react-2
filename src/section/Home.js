import Message from "../components/Message";
import ContactForm from "../components/ContactForm";
import Search from "../components/Search";
import FilterContact from "../components/FilterContact";
import TableContact from "../components/TableContact";
import {useState} from "react";


const Home = ({contacts, setContacts, showMessage, setShowMessage, form, setForm, state, setState, setId, id}) => {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('allContact')
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
        </div>
    )
}

export default Home