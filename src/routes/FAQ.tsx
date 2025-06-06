import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Como o sistema detecta enchentes?",
    answer: "Utilizamos sensores IoT instalados em pontos estratégicos que monitoram o nível da água em tempo real. Quando o nível atinge um limite crítico, o sistema envia alertas automáticos..",
    value: "item-1",
  },
  {
    question: "Quais tecnologias são usadas no monitoramento?",
    answer:
      "Nosso sistema usa sensores de nível, ESP32, comunicação via MQTT, armazenamento em nuvem (AWS) e dashboards para visualização de dados.",
    value: "item-2",
  },
  {
    question:
      "É possível gerar relatórios dos dados coletados?",
    answer:
      "Sim. A plataforma permite a visualização e exportação de relatórios com histórico de eventos, níveis registrados e análise de impacto.",
    value: "item-3",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas Frequentes
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tem dúvidas?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Fale com a gente!
        </a>
      </h3>
    </section>
  );
};
