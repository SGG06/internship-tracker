import Navbar from "./components/navbar";
import ApplicationCard from "./components/application_card.jsx";
import AddApplication from "./components/AddApplication.jsx";
import { useState } from "react";
//if we change the array while App is running React does not know UI needs to be changed. Hence we use UseState so it rerenders the UI when the array is changed. UseState is a hook that allows us to add state to functional components. It returns an array with two elements: the current state and a function to update it.



function App() {

  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "Google",
      role: "Software Engineer Intern",
      status: "Applied",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Software Engineer Intern",
      status: "Applied",
    },
    {
      id: 3,
      company: "Stripe",
      role: "Software Engineer Intern",
      status: "NOT-Applied",
    },
  ]);

function addApplication(company, role, status) {
  const newApplication = {
    id: Date.now(),
    company: company,
    role: role,
    status: status,
  };

  setApplications([...applications, newApplication]);
}

function deleteApplication(id){
    setApplications(
      applications.filter((application) => application.id !== id)
    );
}

function updateStatus(id, newStatus){
  setApplications(
    applications.map((application)=>{
      if(application.id === id){
        return {
          ...application , 
          status : newStatus
        }
      }
      else return {...application}
    })
  )
}

  return (
    <div>
      <Navbar />
      <AddApplication onAdd={addApplication} />
      
      <h1>Job Tracker</h1>
      <p>Track your internship and job applications.</p>

      {applications.map((application) => (
        <ApplicationCard
          key={application.id} // key is there to help React identify which items have changed, are added, or are removed. It should be a unique value for each item in the list.
          id={application.id}
          company={application.company}
          role={application.role}
          status={application.status}
          onDelete={deleteApplication}
          onStatusChange={updateStatus}
        />
      ))}

      {/* for deleting all the records */}
      <br></br>
      <button onClick={() => setApplications([])}>
        Delete All
      </button>

    </div>
  );
}

export default App;