function ApplicationCard({id,company, role,status, onDelete, onStatusChange}) {

    
    return (
        <>
            <h2>{company}</h2>
            <p>{role}</p>
            <select 
                value={status}
                onChange={(e)=> {
                onStatusChange(id, e.target.value)
            }}>
                <option>Applied</option>
                <option>OA</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Offer</option>
                <option>Not Applied</option>
            </select>
            <p>Deadline : 20 September</p>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </>
    )
}

export default ApplicationCard;