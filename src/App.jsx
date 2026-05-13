import Navbar from './components/Navbar'
import "./styles/styles.css"
import Hero from './components/Hero'
import navimg from './assets/images/navimg.jpg'

function App() {
  return (
    <div
      className="app-bg"
      style={{ backgroundImage: `url(${navimg})` }}
    >
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App;
