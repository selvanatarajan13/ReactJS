import React from 'react'

const Footer = () => {
    const year = () => {
        const date = new Date();
        return date.getFullYear();
    }

    return (
        <footer>Copyright &copy; {year()} </footer>
    )
}

export default Footer


// React functional methods