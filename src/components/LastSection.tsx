import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_SERVICEID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATEID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLICKEY;

const LastSection = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('SERVICE_ID:', SERVICE_ID);
    console.log('TEMPLATE_ID:', TEMPLATE_ID);
    console.log('PUBLIC_KEY:', PUBLIC_KEY);
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      e.currentTarget,
      PUBLIC_KEY
    )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        () => {
          alert('Failed to send message.');
        }
      );
    e.currentTarget.reset();
  };

  return (
   <>
   <div className="bg-[#121212] text-white font-sans" id="contact-section">
  <main className="max-w-6xl mx-auto px-6 py-16">
    <section className="max-w-4xl">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="block w-8 h-[2px] bg-[#4aff9e]"></span>
          <h3 className="text-[#4aff9e] font-semibold text-lg leading-none">CONTACT</h3>
        </div>
        <h1 className="text-white font-extrabold text-4xl leading-[1.1] mb-4">
          Yes! You Are Here! Have You Any Project? Drop A Line Here
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-12">
        <form className="flex flex-col gap-4 md:flex-1" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#f3f3f3] text-gray-700 placeholder-gray-500 px-4 py-4 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#f3f3f3] text-gray-700 placeholder-gray-500 px-4 py-4 focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-[#f3f3f3] text-gray-700 placeholder-gray-500 px-4 py-4 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="bg-[#f3f3f3] text-gray-700 placeholder-gray-500 px-4 py-4 focus:outline-none"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Write message"
            className="bg-[#f3f3f3] text-gray-700 placeholder-gray-500 px-4 py-4 resize-none focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="border border-[#4aff9e] text-[#4aff9e] font-semibold py-3 mt-2 hover:bg-[#4aff9e] hover:text-black transition-colors"
          >
            Send Message
          </button>
        </form>
        <aside className="mt-8 md:mt-0 md:flex-1 text-gray-300">
          <p className="mb-4">
            <span className="font-bold text-white">Phone:</span> +009 321 23456
          </p>
          <p className="mb-4">
            <span className="font-bold text-white">Email:</span> hello@Quickhire.com
          </p>
          <p className="mb-4">
            <span className="font-bold text-white">Website:</span> www.Quickhire.com
          </p>
          <p className="mb-8">
            <span className="font-bold text-white">Address:</span> 12/7, Mc Street, Gurgoan
          </p>
          <div className="flex gap-6 text-white text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#4aff9e]"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#4aff9e]"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#4aff9e]"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Behance" className="hover:text-[#4aff9e]"><i className="fab fa-behance"></i></a>
            <a href="#" aria-label="Dribbble" className="hover:text-[#4aff9e]"><i className="fab fa-dribbble"></i></a>
          </div>
        </aside>
      </div>
    </section>
  </main>
</div>
   </>
  )
}

export default LastSection