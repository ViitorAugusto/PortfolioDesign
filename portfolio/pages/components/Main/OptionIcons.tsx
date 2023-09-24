import getIconsSocial from "@/src/utils/getIconsSocial"

export const OptionIcons = () => {
    return(
        <>
            {getIconsSocial().map((icon, index) => {
                return(
                    <div key={index} className="flex justify-center items-center">
                        <div className="border-2 border-green-300 w-12 h-12 flex justify-center items-center rounded-xl cursor-pointer">
                        <icon.image className="text-2xl text-blue-800" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}