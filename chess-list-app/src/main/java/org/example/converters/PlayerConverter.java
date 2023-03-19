package org.example.converters;
import org.example.dto.AddPlayerDTO;
import org.example.dto.PlayerDTO;
import org.example.entities.Player;
import java.util.ArrayList;
import java.util.List;
public abstract class PlayerConverter {
    public static Player convertAddPlayerDtoToEntity(AddPlayerDTO playerDTO) {
        Player player = null;
        if (playerDTO != null) {
            player = new Player();
            player.setName(playerDTO.getName());
            player.setLastName(playerDTO.getLastname());
            player.setEmail(playerDTO.getEmail());
            player.setPersonalid(playerDTO.getPersonalid());
            player.setStartingdate(playerDTO.getStartingdate());
        }
        return player;
    }
    public static PlayerDTO convertPlayerEntityToDto(Player player) {
        PlayerDTO playerDTO = null;
        if (player != null) {
            playerDTO = new PlayerDTO();
            playerDTO.setId(player.getId());
            playerDTO.setName(player.getName());
            playerDTO.setLastname(player.getLastName());
            playerDTO.setEmail(player.getEmail());
            playerDTO.setPersonalid(player.getPersonalid());
            playerDTO.setStartingdate(player.getStartingdate());
        }
        return playerDTO;
    }
    public static List<PlayerDTO> convertPlayerEntityListToDto(List<Player> playerList) {
        List<PlayerDTO> playerDTOList = null;
        for (Player s : playerList) {
            if (playerDTOList == null) {
                playerDTOList = new ArrayList<>();
            }
            playerDTOList.add(PlayerConverter.convertPlayerEntityToDto(s));
        }
        return playerDTOList;
    }
}