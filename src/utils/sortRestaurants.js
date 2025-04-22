export function sortRestaurants(restaurantes, order, randomPrices) {
    return [...restaurantes].sort((a, b) => {
      const indexA = restaurantes.findIndex(r => r.name === a.name)
      const indexB = restaurantes.findIndex(r => r.name === b.name)
  
      switch (order) {
        case "Mejor valorado":
          return b.rating - a.rating
        case "Precio (más bajos primero)":
          return (randomPrices[indexA]?.price || 0) - (randomPrices[indexB]?.price || 0)
        case "Duración (de menor a mayor)":
          return a.name.length - b.name.length
        case "Duración (de mayor a menor)":
          return b.name.length - a.name.length
        default:
          return 0
      }
    })
  }
  