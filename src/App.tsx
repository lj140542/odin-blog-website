import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col w-full items-center'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
