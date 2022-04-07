import { useEffect, useState } from 'react'
import { CoffeeMachine, machineInventory } from '../service/CoffeeMachine'



function Machine() {

    const [store, setStore] = useState<CoffeeMachine>(new CoffeeMachine(machineInventory))
    const [message, setMessage] = useState<string>("what would you like to drink?")
    const [coin, setCoin] = useState<number>(0)

    return (
        <div className="App">
            <header className="App-header">
                <h1>자판기</h1>
                <h4>
                    {message}
                </h4>
                <div>
                    <button onClick={() => setCoin(prev => prev + 100)}>100원</button>
                    <br />
                    {coin}
                </div>
                <section>
                    {store.drinkMenus.map(menu => (
                        <div key={menu.name}>
                            <button
                                onClick={() => {
                                    menu.makeDrink()

                                    setStore(prev => ({ ...prev }))
                                    setCoin(prev => prev - menu.price)
                                    // console.log('onClickMenu', menu.name)
                                }}
                                disabled={coin < menu.price || !menu.isAvailable()}
                            >
                                {menu.isAvailable() ? menu.name : "품절"}
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

                <div>
                    음료별 매출
                    {
                        store.drinkMenus.map(e => {
                            return <div key={e.name}> {e.name + " : " + e.getEarn()}</div>
                        })
                    }
                    <br />
                    총매출
                    {store.drinkMenus.reduce((p, c) => p + c.getEarn(), 0)}
                </div>
            </header>
        </div>
    )
}

export default Machine
