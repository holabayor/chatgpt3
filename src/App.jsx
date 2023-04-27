import {
  About,
  Blog,
  CTA,
  Clients,
  Feature,
  Footer,
  Header,
  Navbar,
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
            <Clients />
          </div>
        </div>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.paddingY} ${styles.pageWidth}`}>
            <About />
          </div>
        </div>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.paddingY} ${styles.pageWidth}`}>
            <Feature />
          </div>
        </div>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.pageWidth} `}>
            <CTA />
          </div>
        </div>
        <div className={`${styles.flexCenter} ${styles.paddingY}`}>
          <div className={`${styles.pageWidth} `}>
            <Blog />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
