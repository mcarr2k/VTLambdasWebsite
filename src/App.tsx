import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Philanthropy from './sections/Philanthropy';
import Chapter from './sections/Chapter';
import Brothers from './sections/Brothers';
import Recruitment from './sections/Recruitment';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philanthropy />
        <Chapter />
        <Brothers />
        <Recruitment />
      </main>
      <Footer />
    </div>
  );
}
