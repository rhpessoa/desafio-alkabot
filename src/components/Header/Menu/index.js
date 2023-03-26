import Image from "next/image";
import Menu from "../../../../public/menu.svg";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuContainer = styled.div`
  .BotaoMenu {
    border: none;
    cursor: pointer;
  }
  .MenuAberto {
    text-align: center;
    list-style-type: none;
    top: 101%;
    right: 0;
    position: absolute;
    width: 100%;
    background-color: #5a84c4;
    border-bottom: 1px solid black;
    .ContainerInfoMenu {
      margin: 1.3rem;
      li {
        border-radius: 10px;
        border: 1px solid #3c2e2e;
        background-color: white;
        padding: 1.3rem 0;
      }
      li:first-child {
        margin-bottom: 0.9rem;
      }
      li:hover {
        border: 2px solid #4287f5;
      }
    }
    .ListaMenu {
    }
  }
`;
export default function MenuSVG({ isMenuOpened, setIsMenuOpened }) {
  function OpenMenu() {
    if (!isMenuOpened) return setIsMenuOpened(true);
    else {
      setIsMenuOpened(false);
    }
  }
  return (
    <MenuContainer>
      <a className="BotaoMenu" onClick={() => OpenMenu()}>
        <Image alt="Menu SVG" src={Menu} width={24} height={16} />
      </a>
      {isMenuOpened && (
        <div className="MenuAberto">
          <div className="ContainerInfoMenu">
            <Link href={"/aboutUs"}>
              <li>Sobre Nós</li>
            </Link>
            <Link href={"/posts"}>
              <li>Posts</li>
            </Link>
          </div>
        </div>
      )}
    </MenuContainer>
  );
}
