function vendingMachine(snack: any, cash: any) {
    const snacks = [
        { name: 'Espresso', price: 1 },
        { name: 'Cappuccino', price: 2.50 },
        { name: 'Chocolate', price: 2 },
        { name: 'Potato', price: 3.50 }
    ]

    const selected_snack = snacks.find(item => item.name === snack)

    if (selected_snack) {
        if (selected_snack.price === cash) {
            return `Your ${snack} have been served`
        }
        else {
            if (selected_snack.price > cash) {
                return `Insufficient funds. Please insert more cash.`
            }
            else {
                return `Your ${snack} have been served. Here is your $${cash - selected_snack.price} change.`
            }
        }
    }

    else {
        return `${snack} does not exist. Please try again`
    }
};

console.log(vendingMachine('Espresso', 12))
