import { BiMoon } from "react-icons/bi";
export function Header() {
  return (
  <>
     <header className="flex container mx-auto text-black h-20 bg-white">
       <div className="flex items-center justify-between w-4/5  mx-auto p-4">
              <h1 className="text-3xl">Vitor Augusto</h1>
              <div className="border-2 h-12 w-12 flex justify-center items-center rounded-full cursor-pointer 
              bg-whitemoon
              ">
                <BiMoon size={25} />
        
                </div>
        </div>
     </header>
  </>
  );
}
