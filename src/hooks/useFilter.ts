export function useFilter() {
  const drawFilterJsx = (keys: string[], keyword: string | null, jsx: any) => {
    if (!keyword) return jsx

    let result = false
    keys.forEach(key => {
      if (key) {
        if (key.toUpperCase().includes(keyword.toUpperCase())) {
          result = true
        }
      }
    })
    if (result) return jsx
  }

  return {
    drawFilterJsx,
  }
}
