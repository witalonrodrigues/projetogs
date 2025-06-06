import { Button } from "../components/ui/button";

export const Home = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]" id='home'>
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
              ANTECIPE DESASTRES, PROTEJA COMUNIDADES
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Sistema de monitoramento em tempo real que detecta e alerta sobre enchentes usando sensores conectados e análise de dados.
        </p>

        <div className="space-y-4 cols-3 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Saiba Como Funciona</Button>
        </div>
      </div>

      <div className="shadow"></div>
    </section>
  );
};
