import { NavLink, Link } from "react-router-dom"

function Header() {
  return (
    <header className="w-[100%] h-20 py-4 px-6 flex gap-6 min-[320px]:gap-12">
      <Link to="/" className="flex items-center font-bold text-xl cursor-pointer">
        <h1>Odin<span className=" text-yellow-500">&nbsp;Blog</span></h1>
      </Link>
      <nav className="flex-1 flex items-center flex-nowrap">
        <NavLink to="/posts" className="nav-option">Posts</NavLink>
        <NavLink to="/about" className="nav-option">About</NavLink>
      </nav>
    </header >
  )
}
export default Header