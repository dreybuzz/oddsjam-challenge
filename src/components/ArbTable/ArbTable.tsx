import arbMarkets from "./../../data/arbs.json"
import { v4 as uuidv4 } from "uuid"
import Pill from "../Pill/Pill"
import "./ArbTable.css"
import { useState } from "react"

// const parsedMarkets = arbMarkets.arbitrage_data.map((market) => {
//   return { ...market }
// })

const HEADERS = [
  {
    title: "Fixture",
  },

  {
    title: "Sport",
  },

  {
    title: "League",
  },

  {
    title: "Percentage",
  },

  {
    title: "Best Home Book(s)",
  },

  {
    title: "Best Away Book(s)",
  },

  {
    title: "Live?",
  },
]

type BestBooksProps = {
  books: string[]
}
const BestBooks = ({ books }: BestBooksProps) => {
  const [otherBooksShown, setOtherBooksShown] = useState(false)
  return (
    <div className="text-center flex flex-col items-center">
      <div className="flex justify-center items-center">
        <Pill title={books[0]} />
        {books.length > 1 && (
          <span
            className="material-symbols-outlined hover-effect ml-2"
            onClick={() => setOtherBooksShown(() => !otherBooksShown)}>
            arrow_drop_down
          </span>
        )}
      </div>

      <div
        className={`bg-slate-500 w-full ease-linear duration-200 flex flex-col gap-2 rounded-md shadow-md shadow-black mt-4 ${
          otherBooksShown
            ? "max-h-[30rem] overflow-scroll p-3"
            : "max-h-0 overflow-hidden"
        }`}>
        {books.slice(1).map((book) => (
          <Pill title={book} />
        ))}
      </div>
    </div>
  )
}

export default function ArbTable() {
  return (
    <table className="table-auto w-full">
      <thead className="bg-slate-900 sticky top-0 z-10">
        <tr className="">
          {HEADERS.map((header) => (
            <th key={uuidv4()} className="p-3 text-center">
              {header.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="h-full">
        {arbMarkets.arbitrage_data.map((market, index) => (
          <tr
            className={`${
              index % 2 === 0 ? "bg-slate-800" : "bg-slate-500"
            } text-center hover:bg-slate-100 cursor-pointer hover:text-black`}>
            <td className="arb-table-cell">
              <span className="hover-effect">{market.home_team}</span>
              <hr className="border-2 border-slate-600 w-full my-2" />
              <span className="hover-effect">{market.away_team}</span>
            </td>

            {/* Sport */}
            <td className="arb-table-cell capitalize">
              <Pill
                title={market.sport}
                icon={
                  "sports_" + (market.sport !== "boxing" ? market.sport : "mma")
                }
              />
            </td>

            {/* League */}
            <td className="arb-table-cell hover-effect">{market.league}</td>

            {/* Percentage */}
            <td className="arb-table-cell">
              {(market.arb_percent * 10).toFixed(2)}
            </td>

            {/* Best Home Books */}
            <td className="arb-table-cell mx-auto">
              <BestBooks books={market.best_price_home_odd_books} />
            </td>

            {/* Best Away Books */}
            <td className="arb-table-cell">
              <BestBooks books={market.best_price_away_odd_books} />
            </td>

            {/* Live */}
            <td className="arb-table-cell hover-effect h-fit max-w-[5rem]">
              {market.is_live ? "Yes" : "No"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
