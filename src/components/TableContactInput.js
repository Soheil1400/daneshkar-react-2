

const  TableContactInput = ({input, form, handleForm}) => {
    return(
        <div style={{width:'18%',display:'flex',padding:'4px',alignItems:'center'}}>
            <label style={{margin:'2px'}}>{input.name} :</label>
            <input style={{padding:'16px',borderRadius:'8px'}} name={input.name} onChange={handleForm} value={form[input.name]}/>
        </div>
    )
}

export default TableContactInput