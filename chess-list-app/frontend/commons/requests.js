const API_BASE_URL = "http://localhost:8080";
export const getPlayer = async () => {
  const response = await fetch(`${API_BASE_URL}/player`);
  const players = await response.json();
  return players;
};
export const getPlayerByID = async (playerId) => {
  const response = await fetch(`${API_BASE_URL}/player/${playerId}`);
  const player = await response.json();
  return player;
};
export const savePlayer = async (player) => {
  await fetch(`${API_BASE_URL}/player`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
};
export const patchPlayer = async (player, id) => {
  await fetch(`${API_BASE_URL}/player/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });
};
export const deletePlayerById = async (playerId) => {
  await fetch(`${API_BASE_URL}/player/${playerId}`, {
    method: "DELETE",
  });
};