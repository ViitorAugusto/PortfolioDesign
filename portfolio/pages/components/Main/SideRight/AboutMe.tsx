import { Navigation } from "./CarouselNavigation";
import aboutme from "../../../../public/AboutMe.json";

export const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4 px-2">
          <h2 className="text-2xl">About Me</h2>
          <div className="flex-1 bg-gradient-to-r from-yellow-500 to-red-500 h-0.5"></div>
        </div>
        <div>
          <p className="text-sm">
            Olá! Estou muito feliz em recebê-lo em meu portfólio. Sou apaixonado
            e versátil desenvolvedor full-stack com grande interesse em explorar
            as mais recentes tecnologias de ponta. Minha jornada no mundo do
            desenvolvimento web tem sido simplesmente emocionante e Eu me
            esforço constantemente para aprimorar minhas habilidades e abraçar
            as tendências emergentes do setor.
          </p>
        </div>

        <div className="flex items-center justify-start gap-4 px-2">
          {/* <div className="flex-1 bg-gradient-to-r from-yellow-500 to-red-500 h-0.5"></div> */}
          <h2 className="text-2xl">What I do!</h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 gap-4">
          {aboutme.map((item, index) => (
            <Navigation
              key={index}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};
