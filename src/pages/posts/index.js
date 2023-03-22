import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { getPosts, getUsers } from "../api/api";
import getAutorById from "../../utils/utils";
const PostContainer = styled.div`
  h1 {
    text-align: center;
  }
  .ListaPost {
    padding: 1rem;
    div {
      margin: 1rem 0;
    }
    div:hover {
      font-size: 20px;
      padding-left: 1em;
      border-left: 5px solid black;
    }
  }
`;
export default function Posts({ posts, users }) {
  return (
    <PostContainer>
      <div>
        <h1>All Post</h1>
        <div className="ListaPost">
          {posts.map((post) => (
            <div key={post.id}>
              <Link href={"/posts/" + post.id}>
                <h3>Titulo: {post.title}</h3>
              </Link>
              <p>Author: {getAutorById(users, post.userId)}</p>
            </div>
          ))}
        </div>
      </div>
    </PostContainer>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  const users = await getUsers();
  return {
    props: { posts, users },
  };
};
