import React from 'react'

const Spinner = () => {
    return (
        <div className='absolute bg-slate-200/30 backdrop-blur-sm flex items-center justify-center inset-0'>
            <div className='spinner'></div>
        </div>
    )
}

export default Spinner