import { useEffect, useState } from "react";
import { MainContentLeft } from "./MainContentLeft";

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
    <main className="bg-red-600 container mx-auto"style={{ height: mainHeight }}>
        <div className="border-2 border-blue-600 w-4/5 h-full mx-auto flex py-4">
            <section className="bg-green-800 w-1/3 flex justify-start items-end">
                <MainContentLeft />
            </section>
            <section className="bg-green-500 w-2/3"></section>
        </div>
    </main>
  );
}
