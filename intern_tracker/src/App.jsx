import Navbar from "./components/navbar";
import ApplicationCard from "./components/application_card.jsx";
import { useState } from "react";
//if we change the array while App is running React does not know UI needs to be changed. Hence we use UseState so it rerenders the UI when the array is changed. UseState is a hook that allows us to add state to functional components. It returns an array with two elements: the current state and a function to update it.

const applications = [ //array of objects to made code scalable and reusable
  {
    company: "Google",
    role: "Software Engineer Intern",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
  },
  {
    company: "Stripe",
    role: "Software Engineer Intern",
  },
];

function App() {

  return (
    <div>
      <Navbar />
      
      <h1>Job Tracker</h1>
      <p>Track your internship and job applications.</p>

      {applications.map((application) => (
        <ApplicationCard
          key={application.company} // key is there to help React identify which items have changed, are added, or are removed. It should be a unique value for each item in the list.
          company={application.company}
          role={application.role}
        />
      ))}

    </div>
  );
}

export default App;