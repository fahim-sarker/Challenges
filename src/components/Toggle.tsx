import { useState } from "react";


function Toggle() {

  const [bgchnage, setBgchange] = useState(false);

  return (
    <div className={`h-screen w-full ${bgchnage ? "bg-black" : "bg-amber-700"}`}>
      <button onClick={() => setBgchange(!bgchnage)} className="border p-3 cursor-pointer w-42">Click</button>
   </div>
  );
}

export default Toggle;
