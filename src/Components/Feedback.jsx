
import { useState } from "react";

function Feedback() {
    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);

    const handleYes = () => setYes((count) => count + 1);
    const handleNo = () => setNo((count) => count + 1);
    const handleClear = () => {
      setYes(0);
      setNo(0);
    };

    return (
        <>
    <div>
        <div>
            <p className="text-2xl font-bold text-[#5C766D]">Was This helpful?</p>
            <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
              onClick={handleYes}
            >
              Yes
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
              onClick={handleNo}
            >
              No
            </button>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <p className="mt-2 text-lg">
            <span className="font-bold">{yes}</span> out of <span className="font-bold">{no}</span> found this helpful.
          </p>
         
    </div>
  </>
      );
    }

export default Feedback;