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
      className={`w-full mx-auto py-2 px-4 cursor-pointer hover:invert ease-linear duration-200 rounded-md shadow-md shadow-black flex justify-center items-center gap-2`}>
      <span className="material-symbols-outlined">{icon}</span>
      <span>{title}</span>
    </div>
  )
}
