import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/Howitworks";
import KeyFeatures from "./Components/KeyFeathures";
import LatestNews from "./Components/LatestNews";

function App() {
  return (
    <div className="app">
      < Header/>
      <Hero/>
      <LatestNews/>
      <KeyFeatures/>
      <HowItWorks/>
      <Footer/>
     
    </div>
  );
}

export default App;
