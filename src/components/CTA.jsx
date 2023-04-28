import styles from '../style';

const CTA = () => (
  <section
    className={`flex justify-between items-center bg__gradient md:p-8  p-4 sm:flex-row flex-col rounded-md`}
  >
    <div className="flex flex-1 flex-col mb-4">
      <p className="text-xs">Request Early Access to Get Started</p>
      <h3 className="sm:text-lg font-extrabold">
        Register today & start exploring the endless possiblities.
      </h3>
    </div>
    <div className="flex justify-center">
      <button className="rounded-full bg-black px-6 py-2 text-white">
        Get Started
      </button>
    </div>
  </section>
);

export default CTA;
