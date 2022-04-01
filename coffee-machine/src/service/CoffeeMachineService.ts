interface MakeDrink {
    onMakeDrink(): any
    cup: number
    water?: number
    price: number
    resource: number
}

export class Coffee implements MakeDrink {
    cup: number
    water: number
    resource: number
    price: number

    constructor(cup: number, water: number, resource: number, price: number) {
        this.cup = cup
        this.water = water
        this.resource = resource
        this.price = price
    }

    onMakeDrink() {
        return this.cup - 1, this.water - 100, this.resource - 15, this.price + 100
    }

}

export class JobsTears implements MakeDrink {
    cup: number
    water: number
    resource: number
    price: number

    constructor(cup: number, water: number, resource: number, price: number) {
        this.cup = cup
        this.water = water
        this.resource = resource
        this.price = price
    }

    onMakeDrink() {
        return this.cup - 1, this.water - 150, this.resource - 20, this.price + 150
    }

}

export class LemonTea implements MakeDrink {
    cup: number
    water: number
    resource: number
    price: number

    constructor(cup: number, water: number, resource: number, price: number) {
        this.cup = cup
        this.water = water
        this.resource = resource
        this.price = price
    }

    onMakeDrink() {
        return this.cup - 1, this.water - 200, this.resource - 30, this.price + 200
    }

}



interface Resources {
    getResource(): number
}

export class Cup implements Resources {
    cup: number
    constructor(cup: number) {
        this.cup = cup
    }
    getResource() {
        return this.cup - 1
    }
}

export class Water implements Resources {
    water: number
    choice: number
    constructor(water: number, choice: number) {
        this.water = water
        this.choice = choice
    }
    getResource() {
        return this.water - this.choice
    }
}

export class Material implements Resources {
    material: number
    choice: number
    constructor(material: number, choice: number) {
        this.material = material
        this.choice = choice
    }
    getResource() {
        return this.material - this.choice
    }
}

export class Cost implements Resources {
    cost: number
    choice: number
    constructor(cost: number, choice: number) {
        this.cost = cost
        this.choice = choice
    }
    getResource() {
        return this.cost + this.choice
    }
}