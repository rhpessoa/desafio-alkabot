import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { getPosts, getUsers } from "../api/api";
import { getAutorUsernameById } from "../../utils/utils";
import Header from "@/components/Header";
import UserSVG from "@/components/User";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderSpinner from "@/components/Spinner";
import Footer from "@/components/Footer";

const PostsContainer = styled.div`
  height: 100vh;
  .ContainerListaPost {
    margin-top: 5rem;
    margin-bottom: 7rem;
  }
  .ContainerCard {
    margin: 1rem 0;
  }
  .ListaPost {
    display: flex;
    flex-direction: column;
    margin: 0 1.3rem;
  }
  .CardPost {
    display: flex;
    flex-direction: row;
    background-color: #6198ed;
    border-radius: 10px;
    height: 7rem;
  }
  .CardPost:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
  .UserImage {
    display: flex;
    background-color: #c5c5c7;
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
`;
export default function Posts({ posts, users }) {
  const [items, setItems] = React.useState(posts.slice(0, 5));
  const [hasMore, setHasMore] = React.useState(true);
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight
      ) {
        setShowLoader(false);
      } else {
        setShowLoader(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchMoreData = () => {
    if (items.length >= posts.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(posts.slice(items.length, items.length + 10)));
    }, 1000);
  };

  return (
    <PostsContainer>
      <Header />
      <div className="ContainerListaPost">
        <InfiniteScroll
          className="InfiniteScroll"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={showLoader && <LoaderSpinner />}
        >
          <div className="ListaPost">
            {items.map((post) => (
              <div className="ContainerCard" key={post.id}>
                <Link href={"/posts/" + post.id}>
                  <div className="CardPost">
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
            ))}
          </div>
        </InfiniteScroll>
      </div>
      <Footer />
    </PostsContainer>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  const users = await getUsers();
  return {
    props: { posts, users },
  };
};
