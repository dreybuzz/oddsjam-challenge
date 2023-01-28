export function generateRandomColor(): string {
  let color = "#"
  const possible = "0123456789ABCDEF"

  for (let i = 0; i < 6; i++) {
    color += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return color
}
