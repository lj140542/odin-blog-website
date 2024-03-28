import './App.css'
import { Outlet } from 'react-router'
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar'

function App() {
  return (
    <>
      <header>
        <h1>Odin Blog</h1>
      </header>

      <Outlet />

      <footer className="flex items-center justify-center">
        <a className="inline-flex items-center gap-2" href="https://github.com/lj140542/odin-blog-website">
          <Avatar>
            <AvatarImage src='https://github.com/github.png'></AvatarImage>
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          Jonathan Lefebvre
        </a>
      </footer>
    </>
  )
}

export default App
