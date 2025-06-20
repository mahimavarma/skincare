export default function Footer() {
  return (
    <footer className="bg-[#2D3B36] text-white  md:px-10 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
        {/* Left - Join the Community */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-52 mt-16">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-between items-start md:items-end text-left space-y-4 mt-16">
          <div>
            <p className="text-gray-300 text-[20px] ">Get in Touch</p>
            <a
              href="mailto:contact.skincare.com"
              className="text-xl md:text-[40px]  hover:underline"
            >
              contact.skincare.com
            </a>
          </div>

          <div className="flex gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookies Policy</a>
          </div>
        </div>
      </div>

      {/* Larger, Centered Background SKINCARE Text */}
      <div className="inset-0 flex justify-center items-center mb-0">
        <div className=" relative uppercase text-white text-[35vw] md:text-[22vw] font-bold opacity-10 leading-none whitespace-nowrap mt-8">
          Skincare
        </div>
      </div>
    </footer>
  );
}
