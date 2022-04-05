import { useEffect, useState } from 'react'
import { CoffeeMachine, machineInventory } from '../service/CoffeeMachine'


function Machine() {

    const store = new CoffeeMachine(machineInventory)

    const [message, setMessage] = useState<string>("what would you like to drink?")
    const [salesCoffee, setSalesCoffee] = useState<number>(0)
    const [salesCocoa, setSalesCocoa] = useState<number>(0)
    const [salesLemonTea, setSalesLemonTea] = useState<number>(0)
    const [stop, setStop] = useState<boolean>(false)

    useEffect(() => {

    }, [])

    const getCoffee = () => {
        store.onMakeDrink("coffee")
        setSalesCoffee(salesCoffee + 1)
        setMessage("enjoy your coffee~")
    }

    const getCocoa = () => {
        store.onMakeDrink("cocoa")
        setSalesCocoa(salesCocoa + 1)
        setMessage("enjoy your cocoa~")
    }

    const getLemonTea = () => {
        store.onMakeDrink("lemon-tea")
        setSalesLemonTea(salesLemonTea + 1)
        setMessage("enjoy your lemon tea~")
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>자판기</h1>
                <h4>
                    {message}
                </h4>
                <section>
                    <div>
                        <button
                            onClick={getCoffee}
                            disabled={stop}
                        >
                            {store.cocoa < 15 ? "품절" : "커피"}
                        </button>
                        <p>
                            {salesCoffee}
                        </p>
                        <small>
                            원두 : {store.coffee}g
                        </small>
                    </div>
                    <div>
                        <button
                            onClick={getCocoa}
                            disabled={stop}
                        >
                            {store.cocoa < 20 ? "품절" : "코코아"}
                        </button>
                        <p>
                            {salesCocoa}
                        </p>
                        <small>
                            율무 : {store.cocoa}g
                        </small>
                    </div>
                    <div>
                        <button
                            onClick={getLemonTea}
                            disabled={stop}
                        >
                            {store.lemon < 30 ? "품절" : "레몬티"}
                        </button>
                        <p>
                            {salesLemonTea}
                        </p>
                        <small>
                            레몬 : {store.lemon}g
                        </small>
                    </div>
                </section>
                <footer>
                    <div>컵 : {store.cup}ea</div>
                    <div>물 : {store.water}ml</div>
                    <div>매출 : {store.sales}원</div>
                </footer>
            </header>
        </div>
    )
}

export default Machine
