import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import styled from "styled-components";
import banner from "../../../public/images/bannerAboutUs.jpg";
const ContainerAboutUs = styled.div`
  .ContainAboutUs {
    margin: 5rem 1.3rem 7.5rem 1.3rem;
  }
  .BannerContain {
    padding-top: 1rem;
  }
  .BannerImagem {
    border-radius: 10px;
  }
  .ContainerTexto {
    text-align: left;
    margin: 1rem 0 2rem 0;
    background-color: #b5d2ff;
    border-radius: 10px;
    padding: 0 0.5rem 0.5rem 0.5rem;
    p {
      text-align: center;
      font-size: 24px;
      margin-top: 0.5rem;
    }
    section {
      margin: 0.5rem 0.5rem;
      display: block;
      text-align: justify;
    }
  }
  @media screen and (min-width: 768px) {
    span {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 1440px) {
    span {
      font-size: 1.4rem;
    }
  }
`;
export default function AboutUs() {
  return (
    <ContainerAboutUs>
      <Header />
      <div className="ContainAboutUs">
        <div className="BannerContain">
          <Image
            className="BannerImagem"
            alt="Banner Corporativo"
            src={banner}
            width={1440}
            height={407}
            sizes="100vw"
            style={{
              width: "100vw",
              height: "auto",
            }}
          />
        </div>
        <div className="ContainerTexto">
          <p>Sobre Nós</p>
          <section>
            <span>
              A Alkabot é uma empresa especializada em desenvolvimento de
              soluções em automação de processos e inteligência artificial. Com
              uma equipe experiente e qualificada, a empresa oferece soluções
              personalizadas para atender às necessidades de seus clientes.
            </span>
          </section>
          <section>
            <span>
              A empresa possui expertise em diversas áreas, incluindo
              processamento de linguagem natural, aprendizado de máquina, visão
              computacional, automação de processos e muito mais. Com isso, a
              Alkabot está preparada para oferecer soluções para empresas de
              diversos segmentos, desde saúde e finanças até varejo e indústria.
            </span>
          </section>
          <section>
            <span>
              Além disso, a Alkabot está comprometida com a entrega de soluções
              inovadoras e de alta qualidade, utilizando as mais recentes
              tecnologias do mercado. Com um processo de desenvolvimento ágil e
              colaborativo, a empresa trabalha em estreita colaboração com seus
              clientes para garantir que as soluções entregues atendam às suas
              necessidades específicas.
            </span>
          </section>
          <section>
            <span>
              Se você procura soluções em automação de processos e inteligência
              artificial, a Alkabot é a empresa certa para você. Entre em
              contato conosco para saber mais sobre como podemos ajudá-lo a
              impulsionar seus negócios com soluções inovadoras e de alta
              qualidade.
            </span>
          </section>
        </div>
      </div>
      <Footer />
    </ContainerAboutUs>
  );
}
