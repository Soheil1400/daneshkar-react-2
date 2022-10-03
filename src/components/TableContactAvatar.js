import {Link} from "react-router-dom";


const TableContactAvatar = ({contact}) => {
    return(
        <div>
            <Link to={`/contacts/${contact.id}`}>
                <button>
                    show contact
                </button>
            </Link>
        </div>
    )
}

export default TableContactAvatar