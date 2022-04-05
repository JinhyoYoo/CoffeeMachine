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
    milk?: number
    jin?: number
}

interface IDrinkMenus {
    name: string
    price: number
    material: IMakeDrink
    makeDrink: (machineInventory: IMachineInventory) => boolean
    isAvailable: (machineInventory: IMachineInventory) => boolean
}

export const machineInventory: IMachineInventory = {
    cup: 10,
    water: 2000,
    coffee: 100,
    cocoa: 100,
    lemon: 100,
    sales: 0
}

class DrinkMenu implements IDrinkMenus {

    constructor(
        public name: string,
        public price: number,
        public material: IMakeDrink,
        public inventory: IMachineInventory
    ) { }

    makeDrink = () => {
        console.log("make Drink", this.name)
        if (this.isAvailable()) {
            return true
        }
        throw new Error('not enough material')
    }

    isAvailable = () => {
        for (let materialKey of Object.keys(this.material)) {
            if ((this.inventory as any)[materialKey] < (this.material as any)[materialKey]) {
                return false
            }
        }
        return true
    }
}

class CustomDrinkMenu extends DrinkMenu {
    makeDrink = () => {
        //addition operation

        return true
    };
}



export class CoffeeMachine {
    drinkMenus: Array<IDrinkMenus> = [];
    inventory: IMachineInventory
    constructor(resource: IMachineInventory) {
        this.inventory = resource
        this.drinkMenus = [
            new DrinkMenu(
                'coffee',
                300,
                {
                    cup: 1,
                    water: 100,
                    coffee: 15,
                },
                resource
            ),
            new DrinkMenu(
                'cocoa',
                400,
                {
                    cup: 1,
                    water: 150,
                    coffee: 20,
                },
                resource
            ),
            new DrinkMenu(
                'lemon-tea',
                500,
                {
                    cup: 1,
                    water: 200,
                    coffee: 30,
                },
                resource
            ),
            // {
            //     name: 'cocoa',
            //     price: 400,
            //     material: {
            //         cup: 1,
            //         water: 150,
            //         cocoa: 20
            //     },
            //     makeDrink: () => {
            //         this.inventory
            //         return true
            //     },
            //     isAvailable: () => {
            //         return true
            //     }
            // }, {
            //     name: 'lemon-tea',
            //     price: 500,
            //     material: {
            //         cup: 1,
            //         water: 200,
            //         lemon: 30
            //     },
            //     makeDrink: () => {
            //         this.inventory
            //         return true
            //     },
            //     isAvailable: () => {
            //         return true
            //     }
            // }
        ]
    }

    // onMakeDrink(selected: string) {
    //     const selectedMenu = CoffeeMachine.drinkMenus.find(item => item.name === selected)
    //     if (selectedMenu) {
    //         const { material } = selectedMenu
    //         for (let materialKey of Object.keys(material)) {
    //             if ((this.inventory as any)[materialKey] > 0) {
    //                 (this.inventory as any)[materialKey] = (this.inventory as any)[materialKey] - (material as any)[materialKey]
    //                 console.log(materialKey, (this.inventory as any)[materialKey])
    //             }
    //         }
    //         if (this.inventory.cup > 0) {
    //             this.inventory.cup = this.inventory.cup - material.cup
    //             console.log("cup", this.inventory.cup)
    //         }

    //         if (this.inventory.water >= material.water) {
    //             this.inventory.water = this.inventory.water - material.water
    //             console.log("water", this.inventory.water)
    //         }


    //         if (selected === "coffee" && material.coffee) {
    //             if (this.inventory.coffee >= material.coffee) {
    //                 this.inventory.coffee = this.inventory.coffee - material.coffee
    //                 console.log("coffee", this.inventory.coffee)
    //             }
    //         }

    //         if (selected === "cocoa" && material.cocoa) {
    //             if (this.inventory.cocoa >= material.cocoa) {
    //                 this.inventory.cocoa = this.inventory.cocoa - material.cocoa
    //                 console.log("cocoa", this.inventory.cocoa)
    //             }
    //         }

    //         if (selected === "lemon-tea" && material.lemon) {
    //             if (this.inventory.lemon >= material.lemon) {
    //                 this.inventory.lemon = this.inventory.lemon - material.lemon
    //                 console.log("lemon", this.inventory.lemon)
    //             }
    //         }

    //         this.inventory.sales = this.inventory.sales + selectedMenu.price
    //     }
}
