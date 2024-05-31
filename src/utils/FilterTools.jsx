export const filterInput = (item, input) => {
      const searchInput = input.toLowerCase()

      return item.filter(a => 
            a?.FoodItems?.toLowerCase().includes(searchInput) || 
            a?.Address?.toLowerCase().includes(searchInput) ||
            a?.Applicant?.toLowerCase().includes(searchInput)
      )
}