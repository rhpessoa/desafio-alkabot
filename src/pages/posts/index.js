import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { getPosts, getUsers } from "../api/api";
import { getAutorUsernameById } from "../../utils/utils";
import Header from "@/components/Header";
import UserSVG from "@/components/User";
const PostContainer = styled.div`
  margin-top: 5rem;
  .ContainerCard {
    margin: 1rem 0;
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
    border-radius: 10px;
    height: 7rem;
  }
  .CardPost:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
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
    margin: 0 0.5rem;
    justify-content: center;
    align-items: left;
    p {
      font-size: 18px;
    }
    span {
      font-size: 14px;
    }
  }
`;
export default function Posts({ posts, users }) {
  return (
    <PostContainer>
      <Header />
      <div className="ListaPost">
        {posts.map((post) => (
          <>
            <div className="ContainerCard">
              <Link href={"/posts/" + post.id}>
                <div className="CardPost" key={post.id}>
                  <div className="UserImage">
                    <UserSVG />
                  </div>
                  <div className="PostText">
                    <p>{post.title}</p>
                    <span>@{getAutorUsernameById(users, post.userId)}</span>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
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
