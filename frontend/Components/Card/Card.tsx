import React from "react";

interface Props {
  id: number;
  companyName: string;
  Ticker: string;
  Price: number;
}

const Card = ({ id, companyName, Ticker, Price }: Props) => {
  return (
    <div className=" w-3/6 h-2/6 bg-white rounded-lg shadow-2xl shadow-zinc-950 p-4 m-10 border border-black border-spacing-2">
      <img
        src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Image"
        className="w-full rounded-t-lg"
      />
      <div className="flex items-center flex-col p-4">
        <h2 className="mx-auto text-xl font-bold mb-2 text-black">
          {companyName} ({Ticker})
        </h2>
        <p className="text-gray-600">${Price}</p>
      </div>
      <p className="text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, officia!
      </p>
    </div>
  );
};

export default Card;