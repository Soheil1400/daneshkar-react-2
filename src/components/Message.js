const Message = ({contacts, setContacts, setShowMessage, showMessage, id}) => {
    const handleDelete = () => {
        setContacts(contacts.filter(contact => contact.id !== id))
        handleDisMessage()
    }

    const handleDisMessage = () => {
        setShowMessage('none')
    }
    return (
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
    )
}

export default Message