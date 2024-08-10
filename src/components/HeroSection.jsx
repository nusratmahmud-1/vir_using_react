import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Header Section */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      
      {/* Action Buttons */}
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-800 transition-all"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-white transition-all">
          Documentation
        </a>
      </div>

      {/* Video Section */}
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-lg transition-transform transform hover:scale-105"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-lg transition-transform transform hover:scale-105"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
