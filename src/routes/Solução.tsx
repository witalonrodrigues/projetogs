import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import gsVetor from "@/img/gs-vetor.png";
import engrenagem from "@/img/cogwheel.png";
import data from "@/img/database.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Análise de Dados",
    description:
      "Aplicação em  Python tem como objetivo analisar dados de enchentes no Brasil, utilizando como base dados reais extraídos de fontes oficiais Sistema Integrado de Informações sobre Desastres.",
    icon: <img src={data} alt="" className="w-16 md:w-32 lg:w-48"/>,
  },
  {
    title: "Monitoramento de Enchentes com IoT",
    description:
      "solução de monitoramento preventivo de enchentes utilizando sensores, microcontrolador ESP32 e protocolo MQTT.",
    icon: <img src={engrenagem} alt="" className="w-16 md:w-24 lg:w-32"/>
  },
];

export const Solução = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Soluções
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Nossa solução une tecnologia IoT e análise de dados em Python para enfrentar os impactos das enchentes no Brasil. Por um lado, sensores conectados monitoram em tempo real o nível da água, umidade e temperatura. Por outro, uma aplicação em Python analisa dados reais de desastres.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={gsVetor}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
