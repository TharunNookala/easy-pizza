import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, disabled, to, type }) => {
    const base = 'bg-yellow-400 text-sm uppercase text-stone-800 inline-block rounded-xl tracking-wide hover:bg-yellow-300 transition-colors duration-300 disabled:cursor-not-allowed'
    const styles={
       primary : base + 'px-4 py-3 md:px-6 md:py-4',
       small : base + 'py-3 px-4 md:px-5 md:py-2.5 text-sm',
       secondary :'border-2 text-sm uppercase text-stone-400 inline-block rounded-xl tracking-wide hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5'
    }
    if (to)
        return <Link to={to} className={styles[type]}>{children}</Link>
    return (
        <button
            disabled={disabled}
            className={styles[type]}
        >
            {children}
        </button>
    )
}

export default Button