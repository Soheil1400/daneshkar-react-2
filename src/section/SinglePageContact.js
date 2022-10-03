import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Card from "../components/Card";


const SinglePageContact = ({contacts, setState, setForm, setId, setShowMessage}) => {
    const [contact, setContact] = useState({})
    const {contactId} = useParams()
    const soheil = useNavigate();

    const handleBack = () => {
        soheil('/')
    }

    useEffect(() => {
        setContact(contacts.filter(item => item.id === Number(contactId))[0])
    }, [])

    return (
        <div>
            <button onClick={handleBack}>
                sumbit
            </button>
            <Card contact={contact}
                  setState={setState}
                  setForm={setForm}
                  setId={setId}
                  setShowMessage={setShowMessage}
            />
        </div>
    )
}

export default SinglePageContact