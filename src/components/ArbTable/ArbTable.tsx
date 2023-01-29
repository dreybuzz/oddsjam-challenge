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

  {
    title: "Placed Bet?",
  },
]

type BestBooksProps = {
  books: string[]
}
const BestBooks = ({ books }: BestBooksProps) => {
  const [otherBooksShown, setOtherBooksShown] = useState(false)
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <div className="flex justify-center items-center w-full relative">
        <div className="w-32">
          <Pill title={books[0]} />
        </div>
        {books.length > 1 ? (
          <span
            className="material-symbols-outlined hover-effect self-end absolute right-0 top-1/2 -translate-y-1/2"
            onClick={() => setOtherBooksShown(() => !otherBooksShown)}>
            arrow_drop_down
          </span>
        ) : (
          <></>
        )}
      </div>

      <div
        className={`bg-slate-500 w-full ease-linear duration-200  rounded-md shadow-md shadow-black ${
          otherBooksShown
            ? "max-h-[30rem] overflow-scroll p-3 flex flex-col gap-2 mt-4"
            : "max-h-0 overflow-hidden"
        }`}>
        {books.slice(1).map((book) => (
          <Pill title={book} />
        ))}
      </div>
    </div>
  )
}

const PlacedBetToggle = () => {
  const [placedBet, setPlacedBet] = useState(false)

  return (
    <div
      className="flex justify-between items-center gap-4 h-full p-2"
      onClick={() => setPlacedBet(!placedBet)}>
      <span>Yes</span>
      <div className="shadow-md shadow-black grow h-10 bg-slate-500 rounded-md overflow-hidden cursor-pointer min-w-[5rem] ">
        <div
          className={`bg-slate-900 h-full w-1/2 cursor-pointer flex justify-center items-center ease-linear duration-300 ${
            placedBet ? "translate-x-full" : ""
          }`}>
          <span className="material-symbols-outlined text-emerald-500 t">
            radio_button_checked
          </span>
        </div>
      </div>
      <span>No</span>
    </div>
  )
}

export default function ArbTable() {
  return (
    <table className="table-auto w-full">
      {/* Headers */}
      <thead className="bg-slate-900 sticky top-0 z-10">
        <tr className="">
          {HEADERS.map((header) => (
            <th key={uuidv4()} className="p-3 text-center whitespace-nowrap">
              {header.title}
            </th>
          ))}
        </tr>
      </thead>

      {/* Body */}
      <tbody className="h-full">
        {arbMarkets.arbitrage_data.map((market, index) => (
          <tr
            className={`${
              index % 2 === 0 ? "bg-slate-800" : "bg-slate-500"
            } text-center hover:bg-stone-400 cursor-pointer hover:text-black`}>
            <td className="arb-table-cell">
              <span className="hover-effect">{market.home_team}</span>
              <hr className="border-2 border-slate-600 w-full my-2" />
              <span className="hover-effect">{market.away_team}</span>
            </td>

            {/* Sport */}
            <td className="arb-table-cell capitalize text-center">
              <div className="w-28 mx-auto">
                <Pill
                  title={market.sport}
                  icon={
                    "sports_" +
                    (market.sport !== "boxing" ? market.sport : "mma")
                  }
                />
              </div>
            </td>

            {/* League */}
            <td className="arb-table-cell">{market.league}</td>

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
            <td className="arb-table-cell h-fit">
              {market.is_live ? "Yes" : "No"}
            </td>

            {/* Placed Bet */}
            <td className="arb-table-cell">
              {/* {market.bet_placed ? "Yes" : "No"} */}
              <PlacedBetToggle />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
