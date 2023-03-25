import { TailSpin } from "react-loader-spinner";

import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
`;

export default function LoaderSpinner() {
  return (
    <LoaderContainer>
      <TailSpin
        height="50"
        width="50"
        color="#166af2"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderContainer>
  );
}
