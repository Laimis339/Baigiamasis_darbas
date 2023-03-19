import { getPlayerByID, patchPlayer } from "../../commons/requests.js";
const editPlayerForm = document
  .getElementById("editPlayerForm")
  .querySelector("form");
let oldPlayerData;
const loadPlayerData = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const playerId = urlParams.get("id");
  oldPlayerData = await getPlayerByID(playerId);
  editPlayerForm.playerName.value = oldPlayerData.name;
  editPlayerForm.playerLastname.value = oldPlayerData.lastname;
  editPlayerForm.playerEmail.value = oldPlayerData.email;
  editPlayerForm.playerPersonalid.value = oldPlayerData.personalid;
  editPlayerForm.playerStartingdate.value = oldPlayerData.startingdate;
};
const handleFormSubmit = async () => {
  editPlayerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const player = {
      name:
        oldPlayerData.name !== editPlayerForm.playerName.value
          ? editPlayerForm.playerName.value
          : undefined,
      lastname:
        oldPlayerData.lastname !== editPlayerForm.playerLastname.value
          ? editPlayerForm.playerLastname.value
          : undefined,
      email:
        oldPlayerData.email !== editPlayerForm.playerEmail.value
          ? editPlayerForm.playerEmail.value
          : undefined,
      personalid:
        oldPlayerData.personalid !== editPlayerForm.playerPersonalid.value
          ? editPlayerForm.playerPersonalid.value
          : undefined,
      startingdate:
        oldPlayerData.startingdate !== editPlayerForm.playerStartingdate.value
          ? editPlayerForm.playerStartingdate.value
          : undefined,
    };
    await patchPlayer(player, oldPlayerData.id);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Player profile Updated!',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(function () {
      window.location.replace("../player-list/player-list.html");
    }, 1600);
  });
};
const handleCancelButton = () => {
  document.getElementById("cancelButton").addEventListener("click", () => {
    window.location.replace("../player-list/player-list.html");
  });
};
(async () => {
  await loadPlayerData();
  handleCancelButton();
  await handleFormSubmit();
})();