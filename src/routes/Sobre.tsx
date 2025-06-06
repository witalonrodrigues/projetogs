export const Sobre = () => {
  return (
    <section
      id="about"
      className="bg-[url(./img/gs-imagem-1.jpg)] mt-20 bg-cover bg-center bg-no-repeat text-white container py-24 sm:py-32"
    >
      <div className="bg-muted/50 rounded-xxl py-20 backdrop-blur-md">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Problema
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                As enchentes são um dos desastres naturais mais recorrentes no Brasil. Todos os anos, milhares de pessoas sofrem com alagamentos que resultam em perdas materiais, deslocamento forçado de famílias, surtos de doenças, contaminação ambiental e, infelizmente, até mortes. Cidades inteiras ficam ilhadas, escolas e hospitais precisam ser fechados, e os prejuízos econômicos ultrapassam milhões de reais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
