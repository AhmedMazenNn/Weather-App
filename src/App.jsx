
import './App.css'
import Search from './components/Search/Search'

function App() {
  const handelOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <>
      <div className="container">
        <Search onSearchChange={handelOnSearchChange}/>
      </div>
    </>
  )
}

export default App
