export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const getUsers = async () => {
  const resUserData = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await resUserData.json();
  return userData;
};
