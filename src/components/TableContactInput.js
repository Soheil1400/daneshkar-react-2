

const  TableContactInput = ({input, form, handleForm}) => {
    return(
        <>
            <label>{input.name}</label>
            <input name={input.name} onChange={handleForm} value={form[input.name]}/>
        </>
    )
}

export default TableContactInput