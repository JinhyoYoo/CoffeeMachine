import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [cup, setCup] = useState<number>(5)
    const [bin, setBin] = useState<number>(100)
    const [water, setWater] = useState<number>(1000)
    const [eat, setEat] = useState<number>(0)
    const [message, setMessage] = useState<string>("enjoy coffee~")
    const [stop, setStop] = useState<boolean>(false)


    useEffect(() => {
        if (cup === 0 || bin <= 15 || water <= 150) {
            setStop(true)
            if (cup === 0) {
                setMessage("There is no cup.")
            }
            if (bin <= 15) {
                setMessage("There is no bin.")
            }
            if (water <= 150) {
                setMessage("There is no water.")
            }
        }
    }, [cup, bin, water])


    const getCoffee = () => {
        setCup(cup - 1)
        setBin(bin - 15)
        setWater(water - 150)
        setEat(eat + 1)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Coffee Machine</h1>
                <p>
                    <button
                        onClick={getCoffee}
                        disabled={stop}
                    >
                        Give me a coffee!
                    </button>
                </p>
                <p>
                    {eat}
                </p>
                <p>
                    {message}
                </p>
                <p>
                    Cup : {cup}
                    {' | '}
                    Bin : {bin}
                    {' | '}
                    Water : {water}
                </p>
            </header>
        </div>
    )
}

export default App
