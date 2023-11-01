import React, { useState } from 'react'

function Counter() {
    

    const [count, setCount] = useState(0)


    return (

        <div className='mt-5 mb-5 col-12  ' >
            <h1 className='text-danger text-center  ' >COUNTER</h1>

            <div className='d-flex justify-content-around border round-5 bg-dark  p-5 '>

                <button className='btn btn-danger '
                    onClick={() => setCount(count - 1)} >-</button>

                <h3 className='text-white p-3'>{count}</h3>


                <button className='btn btn-danger'
                    onClick={() => setCount(count + 1)} >+</button>
            </div>

        </div>
    )
}

export default Counter
