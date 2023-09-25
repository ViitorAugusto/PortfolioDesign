import { useEffect, useState } from "react";
import { MainContentLeft } from "./SideLeft/MainContentLeft";
import { MainContentRight } from "./SideRight/MainContentRight";

export function Main() {
  const [mainHeight, setMainHeight] = useState(0);
  useEffect(() => {
    function calculateMainHeight() {
      const headerHeight = 80;
      const screenHeight = window.innerHeight;
      const availableHeight = screenHeight - headerHeight;
      setMainHeight(availableHeight);
    }
    calculateMainHeight();
    window.addEventListener("resize", calculateMainHeight);
    return () => {
      window.removeEventListener("resize", calculateMainHeight);
    };
  }, []);
  return (
    <main
      className="container mx-auto text-black"
      style={{ height: mainHeight }}
    >
      <div className="mx-auto flex flex-col py-2">
        <section className="w-full flex flex-col mt-24 relative rounded-md">
          <div className="w-52 h-52 bg-slate-800 mx-auto absolute -top-24 left-12 z-10 rounded-md">
            
          </div>
          <MainContentLeft />
        </section>
        <section className="">
          <MainContentRight />
        </section>
      </div>
    </main>
  );
}
