import About from "./components/About";
import Card from "./components/Card";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="py-10 bg-gray-100 md:px-5 min-h-screen">
      <Card />
      <About />
      <Skills />
      <Footer />
    </div>
    
  );
}
export default App;