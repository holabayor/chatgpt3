import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 md:mx-72`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[100px] min-w-[60px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[100px] w-[50px] h-[24px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
