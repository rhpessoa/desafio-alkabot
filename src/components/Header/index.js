import styled from "styled-components";
import LogoSVG from "./Logo";
import MenuSVG from "./Menu";
import Link from "next/link";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: #3e74c9;
  border-bottom: 1px solid black;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .LogoMenu {
    margin-right: 1.3rem;
  }
  .LogoHeader {
    margin-left: 1.3rem;
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
      font-size: 18px;
      color: white;
    }
  }

  .ContainerLista {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .LogoMenu {
      display: none;
    }
    .NomeEmpresa {
      p {
        font-size: 24px;
      }
    }
    .ContainerLista {
      display: flex;
      list-style: none;
      margin-right: 5rem;
      color: white;
      font-weight: bold;
      font-size: 24px;
    }
    .ItemLista:first-child {
      margin-right: 2rem;
    }
    .ItemLista {
      p:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    .NomeEmpresa {
      p {
        font-size: 28px;
      }
    }
    .ContainerLista {
      font-size: 28px;
      margin-right: 7rem;
    }
  }
`;
export default function Header() {
  return (
    <HeaderContainer>
      <div className="LogoHeader">
        <LogoSVG />
        <div className="NomeEmpresa">
          <p>Alkabot</p>
        </div>
      </div>
      <div className="ContainerLista">
        <li className="ItemLista">
          <Link href={"/posts"}>
            <p>Posts</p>
          </Link>
        </li>
        <li className="ItemLista">
          <Link href={"/aboutUs"}>
            <p>Sobre Nós</p>
          </Link>
        </li>
      </div>
      <div className="LogoMenu">
        <MenuSVG />
      </div>
    </HeaderContainer>
  );
}
