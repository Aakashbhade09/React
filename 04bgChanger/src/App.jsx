import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState('black')

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-6 left-1/2 flex max-w-[95%] -translate-x-1/2 flex-wrap justify-center gap-3 rounded-full bg-white p-3 shadow-xl">

        <button onClick={() => setColor('red')}
          className="rounded-full bg-red-600 px-5 py-3 text-white shadow-md">
          Red
        </button>

        <button onClick={() => setColor('green')}
          className="rounded-full bg-green-600 px-5 py-3 text-white shadow-md">
          Green
        </button>

        <button onClick={() => setColor('blue')}
          className="rounded-full bg-blue-600 px-5 py-3 text-white shadow-md">
          Blue
        </button>

        <button onClick={() => setColor('olive')}
          className="rounded-full bg-[#808000] px-5 py-3 text-white shadow-md">
          Olive
        </button>

        <button onClick={() => setColor('gray')}
          className="rounded-full bg-gray-500 px-5 py-3 text-white shadow-md">
          Gray
        </button>

        <button onClick={() => setColor('yellow')}
          className="rounded-full bg-yellow-400 px-5 py-3 text-black shadow-md">
          Yellow
        </button>

        <button onClick={() => setColor('pink')}
          className="rounded-full bg-pink-300 px-5 py-3 text-black shadow-md">
          Pink
        </button>

        <button onClick={() => setColor('purple')}
          className="rounded-full bg-purple-700 px-5 py-3 text-white shadow-md">
          Purple
        </button>

        <button onClick={() => setColor('lavender')}
          className="rounded-full bg-[#e6e6fa] px-5 py-3 text-black shadow-md">
          Lavender
        </button>

        <button onClick={() => setColor('white')}
          className="rounded-full bg-white px-5 py-3 text-black shadow-md">
          White
        </button>

        <button onClick={() => setColor('black')}
          className="rounded-full bg-black px-5 py-3 text-white shadow-md">
          Black
        </button>

      </div>
    </div>
  )
}

export default App

