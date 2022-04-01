import { useEffect, useState } from 'react'
import { Coffee, Cost, Cup, Material, Water } from '../service/CoffeeMachineService'

function Machine() {

    const [cup, setCup] = useState<number>(10)
    const [water, setWater] = useState<number>(2000)
    const [bean, setBean] = useState<number>(100)
    const [jobsTears, setJobsTears] = useState<number>(100)
    const [lemon, setLemon] = useState<number>(100)
    const [salesCoffee, setSalesCoffee] = useState<number>(0)
    const [salesJobsTearsTea, setSalesJobsTearsTea] = useState<number>(0)
    const [salesLemonTea, setSalesLemonTea] = useState<number>(0)
    const [message, setMessage] = useState<string>("what would you like to drink?")
    const [stop, setStop] = useState<boolean>(false)

    const coffee = new Coffee(cup, water, bean, salesCoffee)
    const jobsTearsTea = new Coffee(cup, water, jobsTears, salesJobsTearsTea)
    const lemonTea = new Coffee(cup, water, lemon, salesCoffee)

    const salesTotal = salesCoffee + salesJobsTearsTea + salesLemonTea

    useEffect(() => {
        if (cup === 0 || bean < 15 || jobsTears < 20 || lemon < 30 || water < 200) {
            setStop(true)
            if (cup === 0) {
                setMessage("Not enough cup.")
            }
            if (bean < 15) {
                setMessage("Not enough bean.")
            }
            if (jobsTears < 20) {
                setMessage("Not enough job's tears.")
            }
            if (lemon < 30) {
                setMessage("Not enough lemon.")
            }
            if (water < 200) {
                setMessage("Not enough water.")
            }
        }
    }, [cup, bean, jobsTears, lemon, water])

    const getCoffee = () => {
        coffee.onMakeDrink()
        console.log("make Coffee", coffee.onMakeDrink())
        setMessage("enjoy your coffee~")
    }

    const getJobsTearTea = () => {
        jobsTearsTea.onMakeDrink()
        console.log("make Job's Tears Tea", jobsTearsTea.onMakeDrink())
        setMessage("enjoy your job's tears tea~")
    }

    const getLemonTea = () => {
        lemonTea.onMakeDrink()
        console.log("make Lemon Tea", lemonTea.onMakeDrink())
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
                            {bean < 15 ? "품절" : "커피"}
                        </button>
                        <p>
                            {salesCoffee / 100}
                        </p>
                        <small>
                            원두 : {bean}
                        </small>
                    </div>
                    <div>
                        <button
                            onClick={getJobsTearTea}
                            disabled={stop}
                        >
                            {jobsTears < 20 ? "품절" : "율무차"}
                        </button>
                        <p>
                            {salesJobsTearsTea / 150}
                        </p>
                        <small>
                            율무 : {jobsTears}
                        </small>
                    </div>
                    <div>
                        <button
                            onClick={getLemonTea}
                            disabled={stop}
                        >
                            {lemon < 30 ? "품절" : "레몬티"}
                        </button>
                        <p>
                            {salesLemonTea / 200}
                        </p>
                        <small>
                            레몬 : {lemon}
                        </small>
                    </div>
                </section>
                <footer>
                    <div>컵 : {cup}</div>
                    <div>물 : {water}</div>
                    <div>매출 : {salesTotal}</div>
                </footer>
            </header>
        </div>
    )
}

export default Machine
