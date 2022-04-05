import { useEffect, useState } from 'react'
import { CoffeeMachine, machineInventory } from '../service/CoffeeMachine'



function Machine() {

    const [store,] = useState<CoffeeMachine>(new CoffeeMachine(machineInventory))
    const [message, setMessage] = useState<string>("what would you like to drink?")

    return (
        <div className="App">
            <header className="App-header">
                <h1>자판기</h1>
                <h4>
                    {message}
                </h4>
                <section>
                    {store.drinkMenus.map(menu => (
                        <div key={menu.name}>
                            <button
                                onClick={() => menu.makeDrink}
                                disabled={menu.isAvailable()}
                            >
                                {menu.isAvailable() ? "품절" : menu.name}
                            </button>
                            <p>
                                {/* {salesCoffee} */}
                            </p>
                        </div>
                    ))}
                </section>
                <footer>
                    <div>컵 : {store.inventory.cup}ea</div>
                    <div>물 : {store.inventory.water}ml</div>
                    <div>매출 : {store.inventory.sales}원</div>
                </footer>
            </header>
        </div>
    )
}

export default Machine
