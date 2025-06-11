

const Main = () => {
  return (
   <>
   <main className="flex-1 relative flex items-center justify-center px-10 py-20 overflow-hidden">
   <div className="max-w-4xl z-10">
    <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
     <span className="text-[#4efb9f]">
      Your HR Department.
     </span>
     <span>
      On Retainer. On Demand.
     </span>
    </h1>
    <p className="text-white text-base max-w-xl mb-10 leading-relaxed">
     Affordable, expert-led HR services for growing businesses—without the need to hire an in-house team.
    </p>
    <p className="text-white text-base max-w-xl mb-10 leading-relaxed">
     From hiring to policies, payroll to compliance—QuikHR is your plug-and-play HR partner.
    </p>
    <div className="flex space-x-6">
     <button
 className="border border-[#4efb9f] text-[#4efb9f] font-semibold px-6 py-3 hover:bg-[#4efb9f] hover:text-black transition"
 onClick={() => {
   const section = document.getElementById('contact-section');
   section?.scrollIntoView({ behavior: 'smooth' });
 }}
>
 Contact With Me
</button>
<button className="bg-[#4efb9f] text-black font-semibold px-6 py-3 hover:bg-[#00ffcc] transition">
  Schedule a Call
</button>
    
    </div>
   </div>
   
  </main>
  </>
  )
}

export default Main