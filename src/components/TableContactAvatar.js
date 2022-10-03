

const TableContactAvatar = ({contact}) => {
    return(
        <div>
            <div style={{width: '60px', height: '60px', borderRadius: '50%'}}>
                <img src={`https://avatars.dicebear.com/api/avataaars/:${contact.id}.svg`}/>
            </div>
        </div>
    )
}

export default TableContactAvatar