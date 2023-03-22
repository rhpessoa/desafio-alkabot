function getAutorById(users, userId) {
  const user = users.find((user) => user.id === userId);
  return user?.name || "Desconhecido";
}
export default getAutorById;
