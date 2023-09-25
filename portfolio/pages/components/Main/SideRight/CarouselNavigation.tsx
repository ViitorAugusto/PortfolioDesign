import { Carousel } from "@material-tailwind/react";

export function CarouselNavigation() {
  return (
    <Carousel
      className="rounded-xl bg-blue-500 flex flex-col"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer  rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="h-full w-full object-cover bg-green-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        error ipsam nemo quos nostrum quia iste quidem illum? Amet iusto iure
        minima natus? Expedita voluptate inventore doloribus ab totam qu
      </div>
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        error ipsam nemo quos nostrum quia iste quidem illum? Amet iusto iure
        minima natus? Expedita voluptate inventore doloribus ab totam qu
      </div>
    </Carousel>
  );
}
