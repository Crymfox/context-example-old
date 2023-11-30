import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link>
            <hr />
            <h1>Hello World!</h1>
        </>
    )
}

export default Nav
