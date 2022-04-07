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
    isAvailable: () => boolean
    makeDrink: () => boolean
    getEarn: () => number
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

    makeCount: number = 0;
    constructor(
        public name: string,
        public price: number,
        public material: IMakeDrink,
        public inventory: IMachineInventory
    ) { }

    getEarn = () => {
        return this.makeCount * this.price
    }

    isAvailable = () => {
        for (let materialKey of Object.keys(this.material)) {
            if ((this.inventory as any)[materialKey] < (this.material as any)[materialKey]) {
                return false
            }
        }
        return true
    }

    makeDrink = () => {
        if (this.isAvailable()) {
            console.log("make Drink ok", this.name)
            for (let materialKey of Object.keys(this.material)) {
                (this.inventory as any)[materialKey] = (this.inventory as any)[materialKey] - (this.material as any)[materialKey]
            }
            this.makeCount++
            return true
        }
        throw new Error('not enough material')
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
                'Coffee',
                300,
                {
                    cup: 1,
                    water: 100,
                    coffee: 15,
                },
                resource
            ),
            new DrinkMenu(
                'Cocoa',
                400,
                {
                    cup: 1,
                    water: 150,
                    coffee: 20,
                },
                resource
            ),
            new DrinkMenu(
                'Lemon Tea',
                500,
                {
                    cup: 1,
                    water: 200,
                    coffee: 30,
                },
                resource
            ),
        ]
    }
}
