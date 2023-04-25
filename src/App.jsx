import {
  Navbar,
  Home,
  Clients,
  About,
  Blog,
  Footer,
  Header,
} from './components';
import styles from './style';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6">
        <div className="flex justify-center items-center">
          <div className={`${styles.pageWidth}`}>
            <Navbar />
            <Header />
          </div>
        </div>
        <Clients />
        <Home />
        <About />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
