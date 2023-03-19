import { savePlayer } from "../../commons/requests.js";
const handleFormSubmit = async () => {
  const form = document.getElementById("addPlayerForm").querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const player = {
      name: form.playerName.value,
      lastname: form.playerLastname.value,
      email: form.playerEmail.value,
      personalid: form.playerPersonalid.value,
      startingdate: form.playerStartingdate.value,
    };
    await savePlayer(player);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'New Player added!',
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(function () {
      window.location.reload();
    }, 1600);
  });
};
const handleCancelButton = () => {
  document.getElementById("cancelButton").addEventListener("click", () => {
    window.location.replace("../player-list/player-list.html");
  });
};
(async () => {
  handleCancelButton();
  await handleFormSubmit();
})();