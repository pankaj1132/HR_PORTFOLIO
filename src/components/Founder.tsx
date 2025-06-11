import { motion } from 'framer-motion';
import Ayushi from '../assets/Ayushi.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  hover: { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(78,251,159,0.25)' },
};

const shimmer = {
  initial: { backgroundPosition: '200% 0' },
  hover: {
    backgroundPosition: '-200% 0',
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
};

const Founder = () => {
  return (
    <motion.div
      className="bg-[#121212] text-white py-20 px-6 flex justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.img
          src={Ayushi}
          alt="Ayushi Yadav, Founder"
          className="w-[280px] h-[380px] object-cover rounded-xl shadow-lg border-4 border-[#4efb9f] flex-shrink-0"
          variants={cardVariants}
          whileHover="hover"
          whileTap="hover"
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ cursor: 'pointer' }}
        />
        <section className="max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-10 h-[1.5px] bg-[#4efb9f]"></span>
            <h2 className="text-[#4efb9f] font-extrabold text-sm uppercase leading-none tracking-wide">
              Meet the Founder
            </h2>
          </div>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight mb-4">
            Ayushi Yadav
          </h1>
          <h3 className="text-[#00ffcc] font-semibold text-lg mb-4">Founder & HR Leader</h3>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Ayushi Yadav brings 8 years of rich experience in Human Resources, having worked across various industries and later founding a tech organization herself. Her journey has given her deep insights into the unique HR challenges faced by startups and small businesses.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            A strong believer in <span className="text-[#4efb9f] font-semibold">"skills can be taught, but passion must be felt"</span>, Ayushi blends structure with empathy. As a cultural leader, she builds HR systems that empower teams, drive ownership, and cultivate purpose.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <motion.span
              className="bg-[#4efb9f] text-black px-4 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:bg-[#00ffcc] hover:text-[#111] hover:scale-110 shimmer"
              variants={shimmer}
              initial="initial"
              whileHover="hover"
              style={{ background: 'linear-gradient(90deg, #4efb9f 25%, #00ffcc 50%, #4efb9f 75%)', backgroundSize: '200% 100%' }}
            >
              Empathy
            </motion.span>
            <motion.span
              className="bg-[#00ffcc] text-black px-4 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:bg-[#4efb9f] hover:text-[#111] hover:scale-110 shimmer"
              variants={shimmer}
              initial="initial"
              whileHover="hover"
              style={{ background: 'linear-gradient(90deg, #00ffcc 25%, #4efb9f 50%, #00ffcc 75%)', backgroundSize: '200% 100%' }}
            >
              Leadership
            </motion.span>
            <motion.span
              className="bg-[#222] text-[#4efb9f] px-4 py-1 rounded-full text-xs font-bold border border-[#4efb9f] transition-all duration-300 hover:bg-[#4efb9f] hover:text-[#111] hover:scale-110 shimmer"
              variants={shimmer}
              initial="initial"
              whileHover="hover"
              style={{ background: 'linear-gradient(90deg, #222 25%, #4efb9f 50%, #222 75%)', backgroundSize: '200% 100%' }}
            >
              HR Strategy
            </motion.span>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Founder;

