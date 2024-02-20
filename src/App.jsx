import './App.css'
import { Navbar } from './components/Navbar'

function App () {
  return (
    <>
      <Navbar />
      <section className='grid grid-cols-2 h-screen items-center'>
        <aside className=''>
          <img src='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' alt='' />
        </aside>
        <main className='flex justify-center'>
          <h1>A.I.L.A.A.C.C. U.E.P. 195</h1>
        </main>
      </section>

      <section id='services' className='h-screen items-center'>
        <h1 />
      </section>

    </>
  )
}

export default App
