import React from "react";
import { getUsers } from "../api/api";
import { getAutorNameById, getAutorUsernameById } from "../../utils/utils";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserSVG from "@/components/User";
import Like from "@/components/Like";
import Dislike from "@/components/Dislike";
import Share from "@/components/Share";

const PostContainer = styled.div`
  .ContainerListaPost {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .ContainerCard {
    margin: 1rem 0 1rem 0;
  }
  .ListaPost {
    display: flex;
    flex-direction: column;
    margin: 1rem 1.3rem;
  }
  .CardPost {
    display: flex;
    flex-direction: row;
    background-color: red;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: auto;
  }
  .UserImage {
    display: flex;
    background-color: white;
    border-radius: 20px;
    align-self: center;
    justify-content: center;
    margin: 0 0.5rem 0 1rem;
    width: 3rem;
  }
  .PostText {
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    justify-content: center;
    align-items: left;
    width: 100% p {
      font-size: 18px;
    }
    span {
      font-size: 14px;
    }
  }
  .ContainerInfo {
    display: flex;
    justify-content: space-between;
    div:last-child {
      margin-right: 3rem;
    }
  }
  .ContainerMessage {
    background-color: blue;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: auto;
    padding: 1rem 0;
  }
  .ContainBody {
    margin: 0 1.3rem;
  }
  .ContainerDados {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0.5rem 0;
  }
  .ContainerText {
    width: 100%;
  }
  .ContainerAutor {
    margin: 0.5rem 0;
  }
  .ContainerFeedback {
    margin: 2rem 0 1rem 0;
    display: flex;
    justify-content: center;
    div:not(:last-child) {
      margin-right: 1rem;
    }
  }
  .ContainerButton {
    text-align: center;
    margin: 0.5rem;
  }
  .ContainerComents {
    background-color: red;
  }
  .ListaComments {
    display: flex;
    flex-direction: column;
  }
  .CardComment {
    height: auto;
    border-radius: 10px;
    background-color: red;
    display: flex;
  }
  .UserImageComment {
    display: flex;
    background-color: white;
    border-radius: 20px;
    align-self: center;
    justify-content: center;
    margin: 0 0 0 1rem;
    width: 2.5rem;
  }
  .PostComment {
    flex-basis: 90%;
    margin: 0.5rem;
    font-size: 14px;
  }
  .ButtonComment {
    padding: 0.5rem;
    border-radius: 10px;
    background-color: red;
  }
`;
const Detalhes = ({ post, comments, users }) => {
  const [isComentOpened, setIsComentOpened] = React.useState(false);
  function OpenComments() {
    if (isComentOpened === true) {
      setIsComentOpened(false);
    } else {
      setIsComentOpened(true);
    }
  }
  return (
    <PostContainer>
      <Header />
      <div className="ContainerListaPost">
        <div className="ListaPost">
          <div className="ContainerCard">
            <div className="CardPost">
              <div className="UserImage">
                <UserSVG />
              </div>
              <div className="PostText">
                <p>{post.title}</p>
                <div className="ContainerInfo">
                  <div>
                    <span>@{getAutorUsernameById(users, post.userId)}</span>
                  </div>
                  <div>
                    <p>há 3 Horas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ContainerMessage">
              <div className="ContainBody">
                <div className="ContainerDados">
                  <p>Views: 1</p>
                  <p>Shares: 1</p>
                </div>
                <div className="ContainerText">
                  <p>{post.body}</p>
                </div>
                <div className="ContainerAutor">
                  <span>Autor: {getAutorNameById(users, post.userId)}</span>
                </div>
                <div className="ContainerFeedback">
                  <div>
                    <a>
                      <Like />
                    </a>
                  </div>
                  <div>
                    <a>
                      <Share />
                    </a>
                  </div>
                  <div>
                    <a>
                      <Dislike />
                    </a>
                  </div>
                </div>
                <div className="ContainerButton">
                  <a className="ButtonComment" onClick={() => OpenComments()}>
                    {isComentOpened
                      ? "Fechar comentário"
                      : "Mostrar comentário"}
                  </a>
                </div>
                {isComentOpened && (
                  <div className="ListaComments">
                    {comments.map((coment) => (
                      <div className="ContainerCard" key={post.id}>
                        <div className="CardComment">
                          <div className="UserImageComment">
                            <UserSVG />
                          </div>
                          <div className="PostComment">
                            <p>{coment.body}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PostContainer>
  );
};
export default Detalhes;
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const resComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await res.json();
  const dataComments = await resComments.json();
  const users = await getUsers();

  return {
    props: { post: data, comments: dataComments, users },
  };
};
