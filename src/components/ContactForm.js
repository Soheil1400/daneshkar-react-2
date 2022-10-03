import TableContactInput from "./TableContactInput";

const formInputs = [
    {id:1, name:'name'},
    {id:2, name:'age'},
    {id:3, name:'email'},
    {id:4, name:'number'},
    {id:5, name:'country'},
]

const ContactForm = ({form, setForm, state, setState, contacts, setContacts}) => {

    const handleForm = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (state === 'submit') {
            setContacts([...contacts, form])
        } else if (state === 'update') {
            setContacts(contacts.map(contact => contact.id === form.id ? form : contact))
            setState('submit')
        }
        handelClearInputs()
    }

    const handelClearInputs = () => {
        setForm({
            id: Math.floor(Math.random() * 1000),
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
                ADD NEW CONTACT :
            </div>
            <div>
                <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'row',padding:'16px',width:'100%',alignItems:'center'}}>
                    {formInputs.map( input => <TableContactInput form={form} input={input} handleForm={handleForm}/>)}
                    {/*<select style={{padding:'16px',borderRadius:'8px'}} name={'favorite'} onChange={handleForm} value={form.favorite}>*/}
                    {/*    <option value="favoriteContact">favoriteContact</option>*/}
                    {/*    <option value="unFavoriteContact">unFavoriteContact</option>*/}
                    {/*</select>*/}
                    <button style={{marginTop:'8px'}} type={'submit'}>
                        {state}
                    </button>
                </form>
            </div>
        </div>
    )
}


export default ContactForm