// Format number as Indian Rupees
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return '₹0'
  }
  
  const numAmount = parseFloat(amount)
  
  // Format with Indian number system (lakhs, crores)
  if (numAmount >= 10000000) {
    // Crores
    return `₹${(numAmount / 10000000).toFixed(2)} Cr`
  } else if (numAmount >= 100000) {
    // Lakhs
    return `₹${(numAmount / 100000).toFixed(2)} L`
  } else {
    // Regular formatting with commas
    return `₹${numAmount.toLocaleString('en-IN', { 
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    })}`
  }
}

// Format currency for charts (simpler format)
export const formatCurrencySimple = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return '₹0'
  }
  return `₹${parseFloat(amount).toLocaleString('en-IN', { 
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  })}`
}



