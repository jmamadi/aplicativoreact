import { useState, useEffect } from 'react'

const FunctionCounter = (props) => {
    const [count, setCount] = useState(0) // = [state, setState]

    useEffect(() => {
        console.log('El componente se monto')
        setCount(count + 1)

        return () => {
            console.log('Me voy a desmontar')
            setCount(1)
        }
    }, [])

    useEffect(() => {
        console.log('count cambio')

        return () => {
            console.log('return count')
            if(count === 10) {
                setCount(10)
            }
        }
    }, [count])

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)

        }
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <>
            <h3>Function Counter</h3>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default FunctionCounter