import { useState } from 'react';

function ApplicationCard({id,company, role,status,deadline, onDelete, onStatusChange, onUpdate}) {

    const [isEditing, setIsEditing] = useState(false);
    const [editCompany, setEditCompany] = useState(company);
    const [editRole, setEditRole] = useState(role);
    const [editStatus, setEditStatus] = useState(status);
    const [editDeadline, setEditDeadline] = useState(deadline);

    const today = new Date()
    today.setHours(0, 0, 0, 0);

    const deadlineDate = new Date(deadline);
    deadlineDate.setHours(0, 0, 0, 0);

    const daysLeft= Math.ceil((deadlineDate - today)/(1000*60*60*24))
    let deadlineText = ""
    
    if(!deadline) deadlineText = "No deadline set"
    else if(daysLeft===0) deadlineText = "Today"
    else if(daysLeft===1) deadlineText="Tomorrow"
    else if(daysLeft<0) deadlineText = "Overdue"
    else  deadlineText = `${daysLeft} Days Left`

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
            {isEditing? (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-slate-950">Edit application</h3>
                        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">Editing</span>
                    </div>
                    <input
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                        value={editCompany}
                        onChange={(e) => setEditCompany(e.target.value)}
                    />
                    <input
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                        value={editRole}
                        onChange={(e) => setEditRole(e.target.value)}
                    />
                    <select
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                        >
                        <option value="Applied">Applied</option>
                        <option value="OA">OA</option>
                        <option value="Interview">Interview</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Offer">Offer</option>
                        <option value="Not Applied">Not Applied</option>
                    </select>
                    <input
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                        type="date"
                        placeholder="deadline"
                        value={editDeadline}
                        onChange={(e) => setEditDeadline(e.target.value)}
                    />
                    <div className="flex gap-2 pt-1">
                    <button className="flex-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700" onClick={()=> {
                        setIsEditing(false)
                        onUpdate(id, editCompany, editRole, editStatus,editDeadline)
                    }}
                    > Save </button>
                    <button className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50" onClick={()=>{
                        setIsEditing(false)
                        
                    }}> Cancel </button>
                    </div>
                </div>
 
            ):(
                <div>
                <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h2 className="truncate text-lg font-bold text-slate-950">{company}</h2>
                        <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">{role}</p>
                    </div>
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 ring-4 ring-emerald-50" aria-hidden="true"></span>
                </div>
                <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">Current status</span>
                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
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
                </label>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">Deadline</span>
                        <br />
                        {deadline || "No deadline set"}
                    </p>
                    <p>
                        <br/>
                        {deadlineText}
                    </p>
                    
                    <button className="rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50" 
                      onClick={()=> 
                        setIsEditing(true)}
                    >
                        Edit
                    </button>
                </div>
            </div>
            )
            }

            <button className="mt-2 text-xs font-semibold text-slate-400 transition hover:text-rose-600" onClick={()=> onDelete(id)}>Delete application</button>
        </article>
    )
}

export default ApplicationCard;