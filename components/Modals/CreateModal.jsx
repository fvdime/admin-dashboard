"use client";

import GlobalContext from "@/context/GlobalContext";
import React, { useContext, useState } from "react";

const colorClasses = ["indigo", "slate", "lime", "sky", "red", "purple"];

const CreateModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState(colorClasses[0]);
  const { setShowModal, selectedDay } = useContext(GlobalContext);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-3/5 lg:w-2/5">
        <header className="bg-slate-100 px-4 py-2 flex justify-between rounded-t-lg">
          <button
            onClick={() => setShowModal(false)}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          >
            <svg
              className="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </header>
        <div className="p-2">
          <div className="grid grid-cols-1/5 items-end gap-y-2">
            <p className="m-2 text-end text-sm font-semibold">
              {selectedDay.format("dddd, MMMM, DD")}
            </p>
            <input
              className="p-2 m-2 border-0 text-gray-800 font-semibold border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-sky-500"
              type="text"
              placeholder="Add event"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              className="p-2 m-2 border-0 text-gray-700 text-sm font-medium border-b-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-sky-500"
              type="text"
              placeholder="Add description"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <div className="flex justify-end mx-2 gap-x-2">
              {colorClasses.map((color, index) => (
                <span
                  onClick={() => setSelectedColor(color)}
                  key={index}
                  className={`bg-${color}-500 w-4 h04 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedColor === color && (
                    <span className="text-white text-xs">+</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="w-full flex justify-end border-t p-2 mt-4">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 px-4 py-2 text-white rounded-md"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default CreateModal;
