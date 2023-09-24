import { OptionIcons } from "./OptionIcons"

export const MainContentLeft = () => {
    return (
        <div className="border-2 border-black w-full h-3/4 relative rounded-xl">
            <div className="w-52 h-52 border-2 border-green-300 absolute -top-28 left-24">a</div>
            <div className="mt-28 text-center">
                <h1 className="text-3xl font-bold">Vitor Augusto</h1>
                <p className="font-normal text-base">FullStack Developer</p>
            </div>
            <div className=" flex justify-center items-center p-4 gap-5">
               <OptionIcons />
            </div>
        </div>
    )
}