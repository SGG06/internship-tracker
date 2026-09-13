
function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-200">J</div>
          <div>
            <h2 className="text-base font-bold tracking-tight text-slate-950">Job Tracker</h2>
            <p className="text-xs text-slate-500">Career workspace</p>
          </div>
        </div>
        {/* <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">Profile</button> */}
      </div>
    </nav>
  );
}

export default Navbar;