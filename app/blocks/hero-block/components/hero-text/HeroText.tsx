import React from 'react'

const HeroText = () => {
  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-5xl font-bold text-orange-500">Hono</h1>

      <h1 className="text-5xl font-bold">
        Web application
        <br />
        framework
      </h1>

      <p className="text-2xl text-slate-400 mt-4">
        Fast, lightweight, built on Web Standards. <br /> Support for any
        JavaScript runtime.
      </p>
      <div className="flex flex-row justify-start mt-8 gap-4">
        <button className="btn  btn-soft btn-lg rounded-full bg-orange-500 hover:bg-amber-700">
          Get started
        </button>
        <button className="btn  btn-soft btn-lg rounded-full  hover:bg-amber-700 ">
          View on Github
        </button>
      </div>
    </div>
  );
}

export default HeroText