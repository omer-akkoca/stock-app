const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const initilizationState = {
    currentUser  : currentUser ? currentUser : {},
    buyStock : {},
    sellStock : {},
    buyedStocksTotal : [],
    totalValues : {}
}

export default initilizationState;