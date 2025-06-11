import Main from '../components/Main'
import About from '../components/About'
import WhatweDo from '../components/WhatweDo'
import Founder from '../components/Founder'
import Service from '../components/Service'

import FAQ from '../components/FAQ'
import LastSection from '../components/LastSection'

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col bg-[#121212] text-white min-h-screen">
      <Main />
      <About />
      <WhatweDo />
      <Founder />
      <Service/>
     
      <FAQ />
      <LastSection />
    </div>
    </>
    
  )
}

export default HomePage