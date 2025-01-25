import './App.css'
import MovieCard from './components/MovieCard'

//component
//make sure to start with a capital
// <></> is a fragment to break divs 
function App() {
  return (
    <>
      <MovieCard movie={{title: "End Game", release_date: "2019"}}></MovieCard>
    </>
  )
}

export default App
