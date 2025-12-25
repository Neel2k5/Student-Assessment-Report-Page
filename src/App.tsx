import NavBar from "./components/NavBar"
import ReportItem from "./components/ReportItem"
import { data } from "./data/1studentReport"

function App() {


  return (
    <div className="bg-[#D6D6D6] h-full pb-5">
      <NavBar/>
      <ReportItem data={data[0]}/>
    </div>
  )
}

export default App
