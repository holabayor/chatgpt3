import styles from '../style';

const Footer = () => (
  <footer className="bg-[#031B34]">
    <div className={`${styles.pageWidth} ${styles.padding}`}>
      <div className={`${styles.innerPadding}`}>
        <div className="justify-center">
          <h1
            className={`header-text-gradient ${styles.heading1} text-center p-6`}
          >
            Do you want to step into the future before others?
          </h1>
          <span>Request Early Access</span>
        </div>
      </div>
    </div>
    <p className="text-white text-xs text-center">
      &copy;&nbsp;{new Date().getFullYear()} GPT-3. All Rights Reserved.
    </p>
  </footer>
);
export default Footer;
