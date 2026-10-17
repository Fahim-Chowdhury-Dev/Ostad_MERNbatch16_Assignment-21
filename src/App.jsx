import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((previousCount) => previousCount + 1)
  }

  const decrement = () => {
    setCount((previousCount) => previousCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 font-sans">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">
          Counter App
        </h1>

        <p className="mb-8 text-3xl font-bold text-slate-700">
          Count: {count}
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={decrement}
            className="rounded-lg bg-red-500 px-5 py-3 text-lg font-bold text-white transition hover:bg-red-600"
          >
            -
          </button>

          <button
            onClick={reset}
            className="rounded-lg bg-slate-500 px-4 py-3 font-bold text-white transition hover:bg-slate-600"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="rounded-lg bg-green-500 px-5 py-3 text-lg font-bold text-white transition hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
