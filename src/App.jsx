import './App.css';
import Footer from './component/footer/Footer';
import Hero from './component/hero/HeroF';
import Join from './component/join/Join';
import Plan from './component/plan/Plan';
import Programme from './component/programme/Programme';
import Reasons from './component/reasons/Reasons';
import Testimonails from './component/testimonails/Testimonails';
function App() {
  return (
    <>
      <div className="App">
        <Hero></Hero>
        <Programme></Programme>
        <Reasons></Reasons>
        <Plan></Plan>
        <Testimonails></Testimonails>
        <Join></Join>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
