import React from "react";
import { getUsers } from "../api/api";
import { getAutorNameById } from "../../utils/utils";

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
    <div>
      <div>
        <a onClick={() => OpenComments()}>
          <h1>{`Titulo: ${post.title}`}</h1>
          <p>{`Mensagem: ${post.body}`}</p>
          <p>Author: {getAutorNameById(users, post.userId)}</p>
        </a>
      </div>
      {isComentOpened && (
        <>
          {comments.map((coment) => (
            <div key={coment.id}>
              <span>{`User: ${coment.name}`}</span>
              <span>{`Comentário: ${coment.body}`}</span>
            </div>
          ))}
        </>
      )}
    </div>
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
