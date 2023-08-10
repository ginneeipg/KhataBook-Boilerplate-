import { useState } from "react";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function HelpQuestionCard() {
    const [upbit, setUpbit] = useState<boolean>();
  return (
    <div className="flex-row flex bg-white p-5 gap-3">
    <div className="flex-col flex items-start gap-2">
      <span className="font-semibold text-lg">
        Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        maxime provident vel.
      </span>
      <span className="bg-green-50 border border-green-400 px-3 py-1 text-green-400">Top Answer</span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ad
        labore maxime fuga deleniti, dignissimos explicabo corrupti maiores
        magni iste nemo tenetur voluptatum veritatis, sed animi modi at!
        Perferendis beatae debitis voluptatem accusamus provident. Ipsa sit
        et quas, ducimus doloremque laudantium consequuntur modi
        reprehenderit eius, sunt fuga eum, quo distinctio...
      </span>
      <span className="text-blue-500 cursor-pointer">View more 50 answers</span>
    </div>
    {/* <div className="flex flex-col border justify-center items-center ">
        <button className="flex-1 p-2 ">Up</button>
        <hr className="border-2" />
        <button className="flex-1 p-2 ">Up</button>
    </div> */}
      <div className="flex-col justify-center p-3 border dark:border-neutral-800 border-neutral-200 rounded-lg items-center flex  overflow-hidden text-neutral-500">
    {/* upbit */}
    <button
      className={`flex flex-col items-center cursor-pointer justify-center flex-1 p-1 ${
        upbit === true ? "text-green-600 dark:text-green-400  " : ""
      }`}
      onClick={() => setUpbit(true)}
    >
      <AiFillCaretUp className="py-auto" size={25} />
      <span className="text-xs ">0</span>
    </button>
    {/* divider */}
    <div className=" border w-full dark:border-neutral-800 border-neutral-200" />
    {/* downbit */}
    <button
      className={`flex flex-col items-center justify-center flex-1 p-1 cursor-pointer ${
        upbit === false && "text-red-700 dark:text-red-400"
      }`}
      onClick={() => setUpbit(false)}
    >
      <span className="text-xs ">0</span>
      <AiOutlineCaretDown size={25} />
    </button>
  </div>
  </div>
  )
}

export default HelpQuestionCard