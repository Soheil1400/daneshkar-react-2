
const TableContactRow = ({contact, row}) => {
    return(
        <div>
            {row.title}: {contact[row.title]}
        </div>
    )
}

export default TableContactRow