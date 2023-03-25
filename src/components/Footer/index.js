import styled from "styled-components";

const ContainerFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color:blue;
  height: 5rem;
`;
export default function Footer() {
  return (
    <ContainerFooter>
      <h1>Footer</h1>
    </ContainerFooter>
  );
}
