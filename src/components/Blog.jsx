import { blog } from '../constants';
import styles from '../style';

const Blog = () => (
  <section>
    <h1 className={`header-text-gradient ${styles.heading1} mb-4`}>
      A lot is happening,
      <br className="sm:block hidden" /> We are blogging about it.
    </h1>
    <div className="flex md:flex-row flex-col md:gap-6 gap-2">
      <div className="md:w-[40%] w-[100%] bg-[#042c54]">
        <div>
          <img src={blog[0].img} alt={blog[0].id} className="object-contain" />
          <h4 className={`text-white ${styles.heading3}`}>{blog[0].heading}</h4>
        </div>
      </div>
      <div className="md:w-[60%]  w-[100%]">
        <div className="flex sm:flex-row flex-col flex-wrap md:gap-6 gap-2">
          <div className="sm:max-w-[48%] bg-[#042C54]">
            <img
              src={blog[1].img}
              alt={blog[1].id}
              className="object-contain"
            />
            <div className="p-2">
              <p className="text-white">{blog[1].date}</p>
              <h4 className={`text-white ${styles.heading3}`}>
                {blog[1].heading}
              </h4>
            </div>
          </div>
          <div className="sm:max-w-[48%] bg-[#042C54]">
            <img
              src={blog[2].img}
              alt={blog[2].id}
              className="object-contain"
            />
            <div className="p-2">
              <p className="text-white">{blog[2].date}</p>
              <h4 className={`text-white ${styles.heading3}`}>
                {blog[2].heading}
              </h4>
            </div>
          </div>
          <div className="sm:max-w-[48%] bg-[#042C54]">
            <img
              src={blog[3].img}
              alt={blog[3].id}
              className="object-contain"
            />
            <div className="p-2">
              <p className="text-white">{blog[3].date}</p>
              <h4 className={`text-white ${styles.heading3}`}>
                {blog[3].heading}
              </h4>
            </div>
          </div>
          <div className="sm:max-w-[48%] bg-[#042C54]">
            <img
              src={blog[4].img}
              alt={blog[4].id}
              className="object-contain"
            />
            <div className="p-2">
              <p className="text-white">{blog[4].date}</p>
              <h4 className={`text-white ${styles.heading3}`}>
                {blog[4].heading}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
