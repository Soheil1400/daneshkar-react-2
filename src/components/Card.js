import TableContactAvatar from "./TableContactAvatar";
import TableContactRow from "./TableContactRow";

const tableContactRow = [
    {id:1, title:'name'},
    {id:2, title:'age'},
    {id:3, title:'email'},
    {id:4, title:'number'},
    {id:5, title:'favorite'},
    {id:6, title:'country'},
]

const Card = ({contact, setShowMessage, setId, setForm, setState}) => {
    const handleShowMessage = id => {
        setShowMessage('flex')
        setId(id)
    }

    const handleUpdate = contact => {
        setForm(contact)
        setState('update')
    }
    return (
        <div style={{border: '1px solid #000', borderRadius: '8px', margin: '10px', padding: '10px'}}>
            <TableContactAvatar contact={contact}/>
            {tableContactRow.map(row => <TableContactRow contact={contact} row={row}/>)}
            <button onClick={() => handleShowMessage(contact.id)}>
                delete
            </button>
            <button onClick={() => handleUpdate(contact)}>
                update
            </button>
        </div>
    )
}

export default Card