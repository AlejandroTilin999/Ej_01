export function sortAlojamientos(alojamientos, order, prices) {
    return [...alojamientos].sort((a, b) => {
      const iA = alojamientos.findIndex(h => h.name === a.name)
      const iB = alojamientos.findIndex(h => h.name === b.name)
  
      switch (order) {
        case "Mejor valorado":
          return b.rating - a.rating
        case "Precio (más bajos primero)":
          return (prices[iA]?.price || 0) - (prices[iB]?.price || 0)
        case "Duración (de menor a mayor)":
          return a.name.length - b.name.length
        case "Duración (de mayor a menor)":
          return b.name.length - a.name.length
        default:
          return 0
      }
    })
  }
  