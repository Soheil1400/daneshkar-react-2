import Card from "./Card";

const TableContact = ({contacts, search, filter, setShowMessage, setId, setForm, setState}) => {
    return (
        <>
            {contacts.filter(contact => contact.name.toUpperCase().includes(search.toUpperCase()) && (filter === 'allContact' ? true : contact.favorite === filter)).map(contact =>
                <Card contact={contact}
                      setShowMessage={setShowMessage}
                      setId={setId}
                      setForm={setForm}
                      setState={setState}
                />)}
        </>
    )
}

export default TableContact