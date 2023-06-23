import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer"
import "../src/App.css"
import digestImage from "./assets/digest.png";
const App = () => {
  return (
    <div className="app">
      <div className="left">
        <Header />
        < Body />
        < Footer />
      </div>
      <div className="right"><img alt="Notification" src={digestImage} className="illus"/></div>
    </div>
  )
}

export default App;
