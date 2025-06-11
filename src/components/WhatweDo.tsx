import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring', bounce: 0.2 } },
  hover: { scale: 1.07, boxShadow: '0 8px 32px 0 rgba(78,251,159,0.25)' },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08 } }),
}

const emojiVariants = {
  initial: { y: 0 },
  animate: { y: [0, -8, 0], transition: { repeat: Infinity, duration: 1.6, ease: 'easeInOut' } },
}



const WhatweDo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  const cardData = [
    {
      color: '#00ffcc',
      emoji: '✅',
      title: 'Core HR Services',
      items: [
        'HR policy design & employee handbooks',
        'Hiring support & onboarding',
        'Payroll processing & compliance',
        'Performance management systems',
        'Exit management',
      ],
    },
    {
      color: '#4efb9f',
      emoji: '🎯',
      title: 'HR for Growth',
      items: [
        'Structuring KRAs & goal-setting frameworks',
        'Appraisal processes & performance feedback',
        'HR audits & compliance checklists',
      ],
    },
    {
      color: '#00ffcc',
      emoji: '🎉',
      title: 'Team Building & Culture',
      items: [
        'Engagement activities & virtual games',
        'Monthly HR-led team bonding sessions',
        'Rewards & recognition programs',
        'Employee wellness and motivation drives',
        'Custom training & workshops (leadership, communication, etc.)',
      ],
    },
  ]

  return (
    <motion.section
      ref={ref}
      className="bg-[#121212] text-white py-20 px-4 md:px-0 flex justify-center items-center min-h-[90vh]"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      id="whatwedo"
    >
      <div className="max-w-5xl w-full flex flex-col items-center gap-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-[#4efb9f] drop-shadow-lg"
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
        >
          What We Do (And Do Really Well)
        </motion.h2>
        <motion.p
          className="text-gray-300 text-center max-w-2xl mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We take care of everything an HR department should—plus more:
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          variants={sectionVariants}
        >
          {cardData.map((card, idx) => (
            <motion.div
              key={card.title}
              className="bg-[#181818] rounded-2xl p-6 flex flex-col items-start shadow-md border border-[#222] transition-colors group cursor-pointer hover:border-[#4efb9f]"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover="hover"
            >
              <motion.span
                className="text-3xl mb-2"
                style={{ color: idx % 2 === 0 ? '#4efb9f' : '#00ffcc' }}
                variants={emojiVariants}
                initial="initial"
                animate="animate"
              >
                {card.emoji}
              </motion.span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4efb9f] transition-colors duration-300">
                {idx + 1}. {card.title}
              </h3>
              <ul className="text-gray-300 text-sm space-y-2 pl-4">
                {card.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="hover:text-[#00ffcc] transition-colors duration-200 flex items-start gap-2"
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                  >
                    <span className="text-lg leading-5 mt-0.5">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-center text-lg text-gray-300 mt-12 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We believe a happy, aligned team is your biggest growth hack—and we help you create just that.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default WhatweDo
