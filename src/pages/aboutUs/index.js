import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const ContainerAboutUs = styled.div`
  .ContainAboutUs {
    margin: 5rem 0;
  }
`;
export default function AboutUs() {
  return (
    <ContainerAboutUs>
      <Header />
      <div className="ContainAboutUs">
        <h1>About Us</h1>
      </div>
      <Footer />
    </ContainerAboutUs>
  );
}
