export function getAutorUsernameById(users, userId) {
  const user = users.find((user) => user.id === userId);
  return user?.username || "Desconhecido";
}

export function getAutorNameById(users, userId) {
  const user = users.find((user) => user.id === userId);
  return user?.name || "Desconhecido";
}
