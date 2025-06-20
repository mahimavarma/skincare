import ProductImage from '../assets/Girl.png';  
import badge from '../assets/Badge.svg'; 
export default function WhyOurProducts() {
  return (
    <div className="w-full min-h-screen bg-[#fefdf4] px-8 md:px-16 py-12 flex flex-col md:flex-row items-center gap-12 ">
      <div className="w-full md:w-1/2 space-y-8">
        <button className="flex items-center gap-2 px-6 py-3 border rounded-full border-[#2D3B36] text-[#2D3B36] text-[20px] font-medium mb-[100px]">
          <span className="h-4 w-4 rounded-full bg-[#2D3B36]"></span>
          Why Our Products
        </button>

        <h2 className="text-[60px] md:text-5xl  text-[#2D3B36] leading-tight">
          YOUR SKIN DESERVES <br /> THE BEST CARE.
        </h2>

        <p className="text-[#4b4b4b] text-base max-w leading-relaxed">
          Discover a curated collection of skincare products designed to rejuvenate,<br /> protect, and pamper your skin. Explore our rage crafted with love backed<br /> by science, and inspired by nature.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-[60px] flex items-center gap-2">
              <span className="text-[60px] font-regular leading-[1] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent inline-block">01</span>
              <span className="text-[#2D3B36] ml-[50px] text-[60px]">Bio Ingredients</span>
            </h3>
            <p className="text-[#4b4b4b] text-sm max-w-sm mt-10 ml-[130px] text-[18px] mb-[100px]">
              Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
            </p>
          </div>

          <div>
   <h3 className="flex items-center gap-2 text-[60px]">
  {/* Number 02 */}
  <span className="font-regular leading-[1] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent">
    02
  </span>

  {/* Everything Natural in one line with space */}
  <span className="text-[#2D3B36] ml-[50px] tracking-wide text-[50px]">
    Everything&nbsp;Natural
  </span>
</h3>
            <p className="text-[#4b4b4b] text-sm max-w-sm mt-10 ml-[130px] text-[18px] mb-[100px]">
              Pure ingredients for pure skin. The Perfect solution for your skin care needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-[60px] flex items-center gap-2">
              <span className="text-[60px] font-regular leading-[1] bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent inline-block">03</span>
              <span className="text-[#2D3B36] ml-[50px] text-[60px]">All Handmade</span>
            </h3>
            <p className="text-[#4b4b4b] text-sm max-w-sm mt-10 ml-[130px] text-[18px] mb-[100px]">
              Made with love and care. Just for you. Give your skin the tender loving care it deserves.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-[971px] h-[1081px] relative mb-[80px]">
        <img
          src={ProductImage}
          alt="Skin Care Model"
          className="w-[971px] h-[1081px] rounded-[20px] object-cover"
        />

        <div className="absolute top-2 left-4 flex items-center gap-12 relative">
          <p className="text-[#2D3B36] font-medium text-sm">
            Since 2001
          </p>
          <p className="absolute right-[20px] text-[#2D3B36] font-medium text-sm">
            LEARN MORE
          </p>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#EFF5E1] shadow-md rounded-full px-4 py-2 flex items-center space-x-3">
          <div className=" p-2 rounded-full">
          <img src={badge} alt="Wishlist"className='w-12 h-12' />
            
          </div>
          <span className="text-sm text-gray-700">
           Best Skin Care Product<br></br> Award Wining
          </span>
        </div>
      </div>
    </div>
  );
}
