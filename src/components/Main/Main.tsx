import ArbTable from "../ArbTable/ArbTable"
import arbData from "./../../data/arbs.json"

export default function Main() {
  return (
    <main className="grow">
      <section className="p-3 h-full w-full">
        {/* Table Container */}
        <div className="max-h-[48rem] w-full bg-slate-700 p-3 rounded-md drop-shadow-xl shadow-black overflow-scroll">
          {/* Header */}
          <header className="flex items-center">
            <h4 className="font-sen text-2xl font-semibold">
              Arbitrage Opportunities
            </h4>
            <span className="mx-3 rounded-full bg-black w-10 h-10 flex justify-center items-center">
              {arbData.total}
            </span>
          </header>
          <hr className="border-2 border-slate-900 mt-2" />

          {/* Table Component */}
          <div className="mt-4 w-full h-full">
            <ArbTable />
          </div>
        </div>
      </section>
    </main>
  )
}
