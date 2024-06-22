import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex  ">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
            alt="cuilt-fit"
            className="size-[400px] object-contain"
          />
        </div>
        <h1 className="font-semibold text-4xl text-white w-[600px] text-center">
          A fitness movement that is worth breaking a sweat for
        </h1>
        <button className="bg-white text-orange-500 hover:text-black rounded-md p-2 mt-4  font-semibold">
          EXPLORE CULTPASS
        </button>
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="flex flex-col text-white  items-center w-[300px] border-[1px] border-zinc-600 rounded-md px-10 bg-gray-800 h-[200px]">
          <h2 className="text-gray-400 text-2xl font-semibold mt-4">
            cultpass
          </h2>
          <h1 className="text-amber-200 text-4xl font-bold">ELITE</h1>
          <p className="text-gray-400  font-semibold mt-2 mb-4">
            Unlimited access to group classes, all gyms and at-home workouts
          </p>
        </div>
        <div className="flex flex-col text-white mx-10  items-center w-[300px] border-[1px] border-zinc-600 rounded-md px-10 bg-gray-800 h-[200px]">
          <h2 className="text-gray-400 text-2xl font-semibold mt-4">
            cultpass
          </h2>
          <h1 className="text-neutral-300 text-4xl font-bold">PRO</h1>
          <p className="text-gray-400  font-semibold mt-2 mb-4">
            Unlimited access to all PRO gyms and at-home workouts
          </p>
        </div>
        <div className="flex flex-col text-white  items-center w-[300px] border-[1px] border-zinc-600 rounded-md px-10 bg-gray-800 h-[200px]">
          <h2 className="text-gray-400 text-2xl font-semibold mt-4">
            cultpass
          </h2>
          <h1 className="text-pink-500 text-4xl font-bold">HOME</h1>
          <p className="text-gray-400  font-semibold mt-2 mb-4">
            Unlimited access to at-home workouts with calorie tracking
          </p>
        </div>
      </div>
      <div className="flex item-center justify-center mt-32">
        <div className="flex flex-col  w-[300px] relative">
          <div className="flex flex-col relative ">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png"
              alt="img"
              className="object-contain"
            />
            <div className="absolute bottom-1 mx-6 mb-2">
              <h2 className="text-gray-400 text-2xl font-semibold  ">
                cultpass
              </h2>
              <h1 className="text-amber-200 text-4xl font-bold">ELITE</h1>
            </div>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-2xl mt-4">Unlimited access to</h1>
            <ul className="list-disc text-gray-500 text-xl font-semibold ml-5">
              <li className="  ">At-center group classes</li>
              <li>All ELITE & PRO gyms</li>
              <li>At-home live workouts</li>
            </ul>
          </div>
          <button className="bg-white text-orange-500 hover:text-black rounded-md p-2 mt-4  font-semibold w-[100px] absolute bottom-1">
          Learn More
        </button>
        </div>
        <div className="flex flex-col justify-center w-[300px] mx-10 relative">
          <div className="flex flex-col relative">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png"
              alt="img"
              className="object-contain"
            />
            <div className="absolute bottom-1 mx-6 mb-2">
              <h2 className="text-gray-400 text-2xl font-semibold  ">
                cultpass
              </h2>
              <h1 className="text-gray-400 text-4xl font-bold">PRO</h1>
            </div>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-2xl mt-4">Unlimited access to</h1>
            <ul className="list-disc text-gray-500 text-xl font-semibold ml-5">
              <li className="  ">All PRO gyms</li>
              <li>2 Sessions/month at ELITE gyms & group classes</li>
              <li>At-home live workouts</li>
            </ul>
          </div>
          <button className="bg-white text-orange-500 hover:text-black rounded-md p-2 mt-4  font-semibold w-[100px]  bottom-1">
          Learn More
        </button>
        </div>
        <div className="flex flex-col justify-center w-[300px] relative">
          <div className="flex flex-col relative">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png"
              alt="img"
              className="object-contain"
            />
            <div className="absolute bottom-1 mx-6 mb-2">
              <h2 className="text-gray-400 text-2xl font-semibold  ">
                cultpass
              </h2>
              <h1 className="text-pink-500 text-4xl font-bold">HOME</h1>
            </div>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-2xl mt-4">Unlimited access to</h1>
            <ul className="list-disc text-gray-500 text-xl font-semibold ml-5">
              <li className="  ">At home workouts</li>
              <li>Celebrity Workouts</li>
              <li>Goal-based Workouts and Meditation Sessions</li>
            </ul>
          </div>
          <button className="bg-white text-orange-500 hover:text-black rounded-md p-2 mt-4  font-semibold w-[100px]  bottom-1">
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
