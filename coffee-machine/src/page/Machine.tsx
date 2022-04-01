import { useEffect, useState } from 'react'
import { Cost, Cup, Material, Water } from '../service/CoffeeMachineService'

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


    const getCup = new Cup(cup).getResource()
    const getWater = new Water(water, 100).getResource()
    const getBean = new Material(bean, 15).getResource()
    const getJobsTears = new Material(jobsTears, 15).getResource()
    const getLemon = new Material(lemon, 15).getResource()
    const getSalesCoffee = new Cost(salesCoffee, 100).getResource()
    const getSalesJobsTearsTea = new Cost(salesJobsTearsTea, 150).getResource()
    const getSalesLemonTea = new Cost(salesLemonTea, 200).getResource()

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
        setCup(getCup)
        setWater(getWater)
        setBean(getBean)
        setSalesCoffee(getSalesCoffee)
        setMessage("enjoy your coffee~")
    }

    const getJobsTearTea = () => {
        setCup(getCup)
        setWater(getWater)
        setJobsTears(getJobsTears)
        setSalesJobsTearsTea(getSalesJobsTearsTea)
        setMessage("enjoy your job's tears tea~")
    }

    const getLemonTea = () => {
        setCup(getCup)
        setWater(getWater)
        setLemon(getLemon)
        setSalesLemonTea(getSalesLemonTea)
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
                            원두 : {bean}g
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
                            율무 : {jobsTears}g
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
                            레몬 : {lemon}g
                        </small>
                    </div>
                </section>
                <footer>
                    <div>컵 : {cup}ea</div>
                    <div>물 : {water}ml</div>
                    <div>매출 : {salesTotal}원</div>
                </footer>
            </header>
        </div>
    )
}

export default Machine
