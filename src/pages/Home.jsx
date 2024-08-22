import HomeImage from "../assets/HomeImage.svg";
import MoreImage from "../assets/MoreImage.svg";


const Home = () => {
  return (
    <main>
      <section className="bg-white relative py-6">
        <div>
          <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
            <div className='p-16'>
            <h1 className="text-[#123962] lg:text-[64px] md:text-[40px] text-[30px] font-[800] my-8 text-left">Connect, Share 
              <br/>and Collaborate</h1>
            <h1 className="text-[#123962] lg:text-[28px] md:text-[20px] text-[24px] font-[400] my-8 text-left">A blockchain-based collaboration 
              <br/>platform for sharing data, findings 
              <br/>and resources</h1>
              <button
                    className="w-1/8 px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#00AEE6] hover:bg-[#123962]"
                >
                    Get Started
                </button>
            </div>
            <div className="lg:w-[45%] md:w-[45%] w-[100%]">
              <img src={HomeImage} alt="" className="w-[100%]" />
            </div>
          </div>
        </div>

      </section>
      <section className="bg-[#123962] relative py-6" >
        <h2 className="text-white lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center mb-12">
          More About Recollab
        </h2>
        <div>

          <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
            <div className="lg:w-[45%] md:w-[45%] w-[100%]">
              <img src={MoreImage} alt="" className="w-[100%] p-12" />
            </div>
            <ul className="text-white lg:w-[50%] md:w-[50%] w-[90%] p-8">
             <h1 className="lg:text-[24px] md:text-[24px] text-[18px] text-justify"> Recollab leverages blockchain technology to provide a decentralized, secure and transparent environment for researchers to collaborate,
              share data and receive feedback. Recollab provides increased viibilty for research projects and access to a diverse pool of collaborators
              and reviewers.
              <br/>Recollab is for Researchers to:</h1>
              <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 ">Create and manage research projects</li>
              <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 ">Find collaborators or reviewers</li>
              <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 ">Share data, findings and resources securely</li>
              <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 ">Protect intellectual property</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
      <div className="relative flex overflow-x-hidden">
        
            <div className="animate-marquee whitespace-nowrap flex gap-8 p-4  items-center">
            <span className="mx-4 text-[#123962] lg:text-[28px] md:text-[28px] text-[28px] font-[600] cursor-pointer"> Connect, Share and Collaborate</span>
            <span className="mx-4 text-[#123962] lg:text-[28px] md:text-[28px] text-[28px] font-[600] cursor-pointer">Create and Manage research projects</span>
            <span className="mx-4 text-[#123962] lg:text-[28px] md:text-[28px] text-[28px] font-[600] cursor-pointer">Find collaborators or reviewers</span>
            </div>


        </div>
      </section>
    </main>
  );
};

export default Home;
