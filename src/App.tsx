
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
  <>
  <div className="flex flex-row min-h-screen bg-[#121212] text-white">
    <div className="w-74">
      <Navbar />
    </div>
    <div className="flex-1">
      <HomePage />
    </div>
  </div>
  </>
  )
}

export default App