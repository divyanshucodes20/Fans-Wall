import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" gap-4 flex  flex-col h-[44vh] items-center text-white font-bold justify-center">
        <div className=" justify-center items-center flex gap-4 text-bold text-5xl">Buy me a chai <span><img className="bg-slate-400 rounded-md p-1 text-black" width={65} src="/t.gif" alt="" /></span></div>
        <p>a crowd funding platform for creators</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
          <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container pb-32 pt-14 mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-14">Your Fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-700 rounded-full p-2 text-black" width={88} src="/man.jpeg" alt="" />
            <p className=" text-white font-bold">Fans want to help</p>
            <p className="text-center"> Your fans available for you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-700 rounded-full p-1 text-black" width={88} src="/coin.gif" alt="" />
            <p className=" text-white font-bold">Fans want to help</p>
            <p className="text-center"> Your fans available for you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-700 rounded-full p-1 text-black" width={98} src="/group.avif" alt="" />
            <p className=" text-white font-bold">Fans want to help</p>
            <p className="text-center"> Your fans available for you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container pb-32 pt-14 mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl text-white font-bold text-center mb-14">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=xxnhbVE-V_E2Y2-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
