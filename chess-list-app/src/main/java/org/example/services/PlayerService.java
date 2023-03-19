package org.example.services;
import org.example.entities.Player;
import org.example.repositories.PlayerRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class PlayerService {
    private final PlayerRepository playerRepository;
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }
    public void addPlayer(Player player) {
        this.playerRepository.saveAndFlush(player);
    }
    public List<Player> getAllPlayers(){
        return playerRepository.findAll();
    }
    public void editPlayerById(Long id, Player player) {
        Optional<Player> oldPlayerOptional = playerRepository.findById(id);
        if (oldPlayerOptional.isEmpty()) {
            return;
        }
        Player oldPlayer = oldPlayerOptional.get();
        if (player.getName() != null && !oldPlayer.getName().equals(player.getName())){
            oldPlayer.setName(player.getName());
        }
        if (player.getLastName() != null && !oldPlayer.getLastName().equals(player.getLastName())){
            oldPlayer.setLastName(player.getLastName());
        }
        if (player.getEmail() != null && !oldPlayer.getEmail().equals(player.getEmail())){
            oldPlayer.setEmail(player.getEmail());
        }
        if (player.getPersonalid() != null && !oldPlayer.getPersonalid().equals(player.getPersonalid())){
            oldPlayer.setPersonalid(player.getPersonalid());
        }
        if (player.getStartingdate() != null && !oldPlayer.getStartingdate().equals(player.getStartingdate())){
            oldPlayer.setStartingdate(player.getStartingdate());
        }
        playerRepository.saveAndFlush(oldPlayer);
    }
    public Player getPlayerById(Long id) {
        Optional<Player> player = playerRepository.findById(id);
        if (player.isEmpty()) {
            return null;
        }
        return player.get();
    }
    public String getNameById(Long id) {
        Optional<Player> player = playerRepository.findById(id);
        if (player.isEmpty()) {
            return null;
        }
        return player.get().getName();
    }
    public void deletePlayerById(Long id) {
        this.playerRepository.deleteById(id);
    }
}