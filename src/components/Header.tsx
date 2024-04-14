import { NavLink, Link } from "react-router-dom"

function Header() {
  return (
    <header className="max-w-screen-xl w-full h-20 py-4 px-6 flex gap-6 min-[320px]:gap-12">
      <Link to="/" className="flex items-center font-bold text-xl cursor-pointer drop-shadow-md">
        <h1>Odin<span className="text-accent">&nbsp;Blog</span></h1>
      </Link>
      <nav className="flex-1 flex items-center flex-nowrap">
        <NavLink to="/posts" className="nav-option">Posts</NavLink>
        <NavLink to="/about" className="nav-option">About</NavLink>
      </nav>
    </header >
  )
}
export default Header