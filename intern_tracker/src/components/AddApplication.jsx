import{useState } from "react";

function AddApplication({onAdd}) {
    const [company, setCompany] = useState("");
    const [role,setRole]= useState("");
  return (
    <div>
      <h2>Add New Application</h2>

      <input 
        placeholder="Company"
        value={company}
        onChange={(e)=>setCompany(e.target.value)}
        />
      
      <input 
        placeholder="Role"
        value={role}
        onChange={(e)=>setRole(e.target.value)}
        />

      <button onClick={()=> onAdd(company,role)}>Add Application</button>
    </div>
  );
}

export default AddApplication;