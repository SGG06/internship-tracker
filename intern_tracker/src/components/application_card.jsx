function ApplicationCard({company, role}){
    return (
        <>
            <h2>{company}</h2>
            <p>{role}</p>
            <p>Applied</p>
            <p>Deadline : 20 September</p>
        </>
    )
}

export default ApplicationCard;