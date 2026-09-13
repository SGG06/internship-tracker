import { useState } from "react";

function AddApplication({onAdd}) {
    const [company, setCompany] = useState("");
    const [role,setRole]= useState("");
    const [status, setstatus]= useState("Applied")
    const [deadline, setDeadline] = useState("")
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">Stay on top of it</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">Add application</h2>
        <p className="mt-1 text-sm leading-5 text-slate-500">Save a new opportunity to your tracker.</p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Company</span>
          <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" placeholder="e.g. Google" value={company} onChange={(e)=>setCompany(e.target.value)} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Role</span>
          <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" placeholder="e.g. Software Engineer Intern" value={role} onChange={(e)=>setRole(e.target.value)} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Status</span>
          <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" value={status} onChange={(e) => setstatus(e.target.value)}>
            <option value="Applied">Applied</option>
            <option value="OA">OA</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Deadline</span>
          <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" type="date" value={deadline} onChange={(e)=> setDeadline(e.target.value)} />
        </label>
      </div>

      <button className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200" onClick={()=> {
        onAdd(company,role,status,deadline)
        setCompany("")
        setRole("")
        setstatus("Applied")
        setDeadline("")
        }}>
        Add application
      </button>

    </div>
  );
}

export default AddApplication;