import { deletePlayerById, getPlayer } from "../../commons/requests.js";
const renderPlayerTableRows = async (player) => {
  const playerTable = document.getElementById("playerTable");
  const playerTableBody = playerTable.querySelector("tbody");
  player.forEach((s) => {
    const playerRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerText = s.name;
    playerRow.appendChild(nameCell);
    const lastnameCell = document.createElement("td");
    lastnameCell.innerText = s.lastname;
    playerRow.appendChild(lastnameCell);
    const emailCell = document.createElement("td");
    emailCell.innerText = s.email;
    playerRow.appendChild(emailCell);
    const personalidCell = document.createElement("td");
    personalidCell.innerText = s.personalid;
    playerRow.appendChild(personalidCell);
    const startingdateCell = document.createElement("td");
    startingdateCell.innerText = s.startingdate;
    playerRow.appendChild(startingdateCell);
    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.innerText = "EDIT";
    editButton.className = "btn btn-warning";
    editButton.style = "margin-right: 10px";
    editButton.addEventListener("click", async () => {
      window.location.replace(`../edit-player/edit-player.html?id=${s.id}`);
    });
    actionCell.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.className = "btn btn-danger";
    deleteButton.style = "color: black"
    deleteButton.addEventListener("click", async () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Player has been deleted.',
            showConfirmButton: false,
            timer: 1500
          })
          deletePlayerById(s.id);
          setTimeout(function () {
            window.location.reload();
          }, 1600);
        }
      });
    });
    actionCell.appendChild(deleteButton);
    playerRow.appendChild(actionCell);
    playerTableBody.appendChild(playerRow);
    playerRow.style = "background-color: white";
  });
};
const handleAddNewPlayerButton = () => {
  document.getElementById("addPlayer").addEventListener("click", () => {
    window.location.replace("../add-player/add-player.html");
  });
};
(async () => {
  handleAddNewPlayerButton();
  const player = await getPlayer();
  renderPlayerTableRows(player);
})();