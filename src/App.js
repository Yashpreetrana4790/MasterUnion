import Homebanner from './components/Homebanner';
import Navbar from './components/navbar';
import './App.css';
import MetricSliderFeature from './components/MetricSlider_feature';
import WhyMenterlo from './components/WhyMenterlo';
import Features from './components/features';
import Features2 from './components/features2';
import Cta from './components/cta';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homebanner />
      <MetricSliderFeature />
      <WhyMenterlo />
      <Features />
      <Features2 />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
