import { people } from '../assets';
import ai from '../assets/ai.png';
import styles from './../style';

const Header = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexStart} flex-1 flex-col`}>
      <div className="">
        <h1 className={`header-text-gradient ${styles.heading1}`}>
          Let’s Build Something
          <br className="sm:block hidden" /> amazing with GPT-3
          <br className="sm:block hidden" /> OpenAI
        </h1>
        <p
          className={`${styles.paragraph} text-lightBlue sm:text-[18px] text-[16px]`}
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={`sm:mt-10 mt-6`}>
          <label htmlFor="email" />
          <div className="flex">
            <input
              type="email"
              id="email"
              className="sm:rounded-l-md rounded-l-sm sm:p-4 p-2 bg-[#052D56] flex-1 min-w-0 w-full"
              placeholder="Your Email Address"
            />
            <span className="sm:rounded-r-md rounded-r-sm inline-flex items-center sm:p-4 p-2 text-white btn">
              Get Started
            </span>
          </div>
          <div className="sm:my-10 my-6 flex sm:flex-row flex-col items-center">
            <img src={people} alt="people" className="object-contain" />
            <span className="text-lightBlue text-sm sm:ml-4">
              1,600 people requested access a visit in last 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.flexStart} flex-1 flex-col`}>
      <img src={ai} alt="ai" className="w-[100%] h-[100%] object-contain" />
    </div>
  </section>
);

export default Header;
