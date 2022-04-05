interface IMachineInventory {
    cup: number
    water: number
    coffee: number
    cocoa: number
    lemon: number
    sales: number
}

interface IMakeDrink {
    cup: number
    water: number
    coffee?: number
    cocoa?: number
    lemon?: number
}

interface IDrinkMenus {
    name: string
    price: number
    material: IMakeDrink
}


export const machineInventory: IMachineInventory = {
    cup: 10,
    water: 2000,
    coffee: 100,
    cocoa: 100,
    lemon: 100,
    sales: 0
}

export class CoffeeMachine {
    static drinkMenus: Array<IDrinkMenus> = [
        {
            name: 'coffee',
            price: 300,
            material: {
                cup: 1,
                water: 100,
                coffee: 15
            }
        }, {
            name: 'cocoa',
            price: 400,
            material: {
                cup: 1,
                water: 150,
                cocoa: 20
            }
        }, {
            name: 'lemon-tea',
            price: 500,
            material: {
                cup: 1,
                water: 200,
                lemon: 30
            }
        }
    ]

    cup: number
    water: number
    coffee: number
    cocoa: number
    lemon: number
    sales: number

    constructor(resource: IMachineInventory) {
        this.cup = resource.cup
        this.water = resource.water
        this.coffee = resource.coffee
        this.cocoa = resource.cocoa
        this.lemon = resource.lemon
        this.sales = resource.sales
    }

    // get selector(): number {
    //     return this.cup, this.water, this.coffee, this.cocoa, this.lemon, this.sales
    // }

    // set selector(value: number) {
    //     this._selector = value
    // }

    onMakeDrink(selected: string) {
        const selectedMenu = CoffeeMachine.drinkMenus.find(item => item.name === selected)
        if (selectedMenu) {
            const { material } = selectedMenu
            if (this.cup > 0) {
                this.cup = this.cup - material.cup
                console.log("cup", this.cup)
            }

            if (this.water >= material.water) {
                this.water = this.water - material.water
                console.log("water", this.water)
            }

            if (selected === "coffee" && material.coffee) {
                if (this.coffee >= material.coffee) {
                    this.coffee = this.coffee - material.coffee
                    console.log("coffee", this.coffee)
                }
            }

            if (selected === "cocoa" && material.cocoa) {
                if (this.cocoa >= material.cocoa) {
                    this.cocoa = this.cocoa - material.cocoa
                    console.log("cocoa", this.cocoa)
                }
            }

            if (selected === "lemon-tea" && material.lemon) {
                if (this.lemon >= material.lemon) {
                    this.lemon = this.lemon - material.lemon
                    console.log("lemon", this.lemon)
                }
            }

            this.sales = this.sales + selectedMenu.price
        }
    }



}
