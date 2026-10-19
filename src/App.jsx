import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Docs from "./Components/Docs";
import StatCard from "./Components/StatCard";
import Guide from "./Components/Guide";
import Feedback from "./Components/Feedback";

function App() {
  const [read, setRead] = useState(0);
    const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead(read + 1);
  }

  function handleBookmark() {
    setBookmarks(bookmarks + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }
  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar />

      <div className="flex items-end justify-between px-20 pt-10">
          <Docs/>
        <div className="flex gap-4">
      <StatCard read={read} bookmarks={bookmarks} />
        </div>
      </div>
      <Guide onRead={handleRead} onBookmark={handleBookmark} />
      <Feedback onReset={handleReset} />
     
      
    </div>  
  );
}

export default App;