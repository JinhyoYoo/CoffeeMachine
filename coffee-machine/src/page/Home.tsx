import { useEffect, useState } from 'react'

function Home() {
    const [cup, setCup] = useState<number>(10)
    const [bean, setBean] = useState<number>(100)
    const [jobsTear, setJobsTear] = useState<number>(100)
    const [lemon, setLemon] = useState<number>(100)
    const [water, setWater] = useState<number>(2000)
    const [eatCoffee, setEatCoffee] = useState<number>(0)
    const [eatJobsTearTea, setEatJobsTearTea] = useState<number>(0)
    const [eatLemonTea, setEatLemonTea] = useState<number>(0)
    const [message, setMessage] = useState<string>("what would you like to drink?")
    const [stop, setStop] = useState<boolean>(false)

    useEffect(() => {
        if (cup === 0 || bean < 15 || jobsTear < 15 || lemon < 15 || water < 150) {
            setStop(true)
            if (cup === 0) {
                setMessage("Not enough cup.")
            }
            if (bean < 15) {
                setMessage("Not enough bean.")
            }
            if (jobsTear < 15) {
                setMessage("Not enough job's tears.")
            }
            if (lemon < 15) {
                setMessage("Not enough lemon.")
            }
            if (water < 150) {
                setMessage("Not enough water.")
            }
        }
    }, [cup, bean, jobsTear, lemon, water])

    const getCoffee = () => {
        setCup(cup - 1)
        setBean(bean - 15)
        setWater(water - 150)
        setEatCoffee(eatCoffee + 1)
        setMessage("enjoy your coffee~")
    }

    const getJobsTearTea = () => {
        setCup(cup - 1)
        setJobsTear(jobsTear - 15)
        setWater(water - 150)
        setEatJobsTearTea(eatJobsTearTea + 1)
        setMessage("enjoy your job's tears tea~")
    }

    const getLemonTea = () => {
        setCup(cup - 1)
        setLemon(lemon - 15)
        setWater(water - 150)
        setEatLemonTea(eatLemonTea + 1)
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
                            {eatCoffee}
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
                            {jobsTear < 15 ? "품절" : "율무차"}
                        </button>
                        <p>
                            {eatJobsTearTea}
                        </p>
                        <small>
                            율무 : {jobsTear}
                        </small>
                    </div>
                    <div>
                        <button
                            onClick={getLemonTea}
                            disabled={stop}
                        >
                            {lemon < 15 ? "품절" : "레몬티"}
                        </button>
                        <p>
                            {eatLemonTea}
                        </p>
                        <small>
                            레몬 : {lemon}
                        </small>
                    </div>
                </section>
                <footer>
                    <div>컵 : {cup}</div>
                    <div>물 : {water}</div>
                </footer>
            </header>
        </div>
    )
}

export default Home
