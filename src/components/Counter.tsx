import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number +1 )
  }

  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1)
    }
  }
  
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">{number}</h1>
      <div className="flex gap-4">
        <button
         onClick={decrease}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={increase}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
