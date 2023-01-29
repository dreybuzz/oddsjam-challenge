import React from "react"
import { generateRandomColor } from "../../utils/helpers"

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
type Color = RGB | RGBA | HEX
type PillProps = {
  title: string
  color?: Color
  icon?: string
}
export default function Pill({ title, color = "#fff", icon }: PillProps) {
  return (
    <div
      style={{ backgroundColor: color, color: "#000" }}
      className={`w-full bg-gray-300 p-2 text-black text-xs rounded-md text-center cursor-pointer font-semibold hover:bg-black hover:text-white ease-linear duration-200 hover:shadow-md hover:shadow-black truncate flex items-center justify-center gap-2`}>
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-center">{title}</span>
    </div>
  )
}
