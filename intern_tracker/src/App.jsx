import Navbar from "./components/navbar";
import ApplicationCard from "./components/application_card.jsx";
import AddApplication from "./components/AddApplication.jsx";
import { useState } from "react";
import { useEffect } from "react";
//if we change the array while App is running React does not know UI needs to be changed. Hence we use UseState so it rerenders the UI when the array is changed. UseState is a hook that allows us to add state to functional components. It returns an array with two elements: the current state and a function to update it.



function App() {

  //intial applications
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "Google",
      role: "Software Engineer Intern",
      status: "Applied",
      deadline: "2026-09-21",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Software Engineer Intern",
      status: "Applied",
      deadline: "2026-09-21",
    },
    {
      id: 3,
      company: "Stripe",
      role: "Software Engineer Intern",
      status: "Not Applied",
      deadline: "2026-09-21",
    },
  ]);

  const [search, setSearch]= useState("")
  const [filter, setFilter]= useState("All")
  const [sortBy, setSortBy] = useState("Default");


  //add application
function addApplication(company, role, status,deadline) {
  const newApplication = {
    id: Date.now(),
    company: company,
    role: role,
    status: status,
    deadline: deadline,
  };

  setApplications([...applications, newApplication]);
}

//delete applications
function deleteApplication(id){
    setApplications(
      applications.filter((application) => application.id !== id)
    );
}

//use effect to get data from local storage
useEffect(()=> {
  const saved = localStorage.getItem("applications");

  if (saved !== null) {
    const initial =JSON.parse(saved)
    setApplications(initial)  //since initial is array we can also use spread operator but not needed since we have no change
  }
}, [])


//use effect to update the local storage
useEffect(() => {
  localStorage.setItem("applications", JSON.stringify(applications));
}, [applications]);

//react functionality to update the existing arrray so we can see all the companies listed
function updateStatus(id, newStatus){
  setApplications(
    applications.map((application)=>{
      if(application.id === id){
        return {
          ...application , 
          status : newStatus
        }
      }
      else return application
    })
  )
}

function updateApplication(id,company,role,status,deadline){
  setApplications(
    applications.map((application) => {
      if(application.id===id){
        return {
          ...application,
          company: company,
          role: role,
          status: status,
          deadline: deadline
        }
      }
      else return application;
    }))
  }

  const filteredApplications = applications.filter((application)=> application.company.toLowerCase().includes(search.toLowerCase()) && (filter==="All" || application.status===filter))
  
  let totalApplications = applications.length
  let appliedApplications = applications.filter((application)=> application.status==="Applied").length
  let oaApplications = applications.filter((application)=> application.status==="OA").length
  let interviewApplications = applications.filter((application)=> application.status==="Interview").length
  let rejectedApplications = applications.filter((application)=> application.status==="Rejected").length
  let offerApplications = applications.filter((application)=> application.status==="Offer").length
  let notAppliedApplications = applications.filter((application)=> application.status==="Not Applied").length

  const sortedApplications = [...filteredApplications]

  
  {
    if(sortBy === "Deadline : earliest") sortedApplications.sort((a,b)=> new Date(a.deadline)- new Date(b.deadline))
    else if(sortBy === "Deadline : latest") sortedApplications.sort((a,b)=> new Date(b.deadline)- new Date(a.deadline))
    else if(sortBy === "Company : A-Z") sortedApplications.sort((a,b)=> a.company.localeCompare(b.company))
    else if(sortBy === "Company : Z-A") sortedApplications.sort((a,b)=> b.company.localeCompare(a.company))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="mb-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Your workspace</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Job Tracker</h1>
            <p className="mt-2 max-w-xl text-base text-slate-500">Keep every opportunity organized, from first application to final offer.</p>
          </div>
        </section>

        //dashboard
        <div>
          <div>
            <h3>Total</h3>
            <p>{totalApplications}</p>
          </div>

          <div>
            <h3>Applied</h3>
            <p>{appliedApplications}</p>
          </div>

          <div>
            <h3>OA</h3>
            <p>{oaApplications}</p>
          </div>

          <div>
            <h3>Interview</h3>
            <p>{interviewApplications}</p>
          </div>

          <div>
            <h3>Rejected</h3>
            <p>{rejectedApplications}</p>
          </div>
          
          <div>
            <h3>Offers</h3>
            <p>{offerApplications}</p>
          </div>

          <div>
            <h3>Not Applied</h3>
            <p>{notAppliedApplications}</p>
          </div>
          
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section className="order-2 min-w-0 lg:order-1">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-950">Applications</h2>
                <p className="mt-1 text-sm text-slate-500">{filteredApplications.length} {filteredApplications.length === 1 ? "opportunity" : "opportunities"} shown</p>
              </div>
              <button className="self-start rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 sm:self-auto" onClick={() => setApplications([])}>
                Delete all
              </button>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
              <label className="relative block">
                <span className="sr-only">Search applications</span>
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">⌕</span>
                <input className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" placeholder="Search by company..." value={search} onChange={(e) => setSearch(e.target.value)} />
              </label>
              <label>
                <span className="sr-only">Filter applications</span>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option value="All">All statuses</option>
                  <option value="Applied">Applied</option>
                  <option value="OA">OA</option>
                  <option value="Interview">Interview</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Offer">Offer</option>
                  <option value="Not Applied">Not Applied </option>
                </select>
              </label>
              <label>
                <span>Sort by: </span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="Default">Default</option>
                  <option value="Deadline : earliest">Deadline : earliest</option>
                  <option value="Deadline : latest">Deadline : latest</option>
                  <option value="Company : A-Z">Company : A-Z</option>
                  <option value="Company : Z-A">Company : Z-A</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sortedApplications.map((application) => (
                <ApplicationCard
                  key={application.id}
                  id={application.id}
                  company={application.company}
                  role={application.role}
                  status={application.status}
                  deadline={application.deadline}
                  onDelete={deleteApplication}
                  onStatusChange={updateStatus}
                  onUpdate={updateApplication}
                />
              ))}
            </div>

          </section>

          <aside className="order-1 lg:order-2">
            <AddApplication onAdd={addApplication} />
          </aside>
        </div>
      </main>

    </div>
  );
}

export default App;