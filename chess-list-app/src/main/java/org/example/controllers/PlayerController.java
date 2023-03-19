package org.example.controllers;
import org.example.converters.*;
import org.example.dto.AddPlayerDTO;
import org.example.dto.PlayerDTO;
import org.example.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/player")
public class PlayerController {
    @Autowired
    private PlayerService playerService;
    @GetMapping
    public List<PlayerDTO> getAllPlayers() {
        return PlayerConverter.convertPlayerEntityListToDto(this.playerService.getAllPlayers());
    }
    @PostMapping
    public void addPlayer(@RequestBody AddPlayerDTO playerDTO) {
        this.playerService.addPlayer(PlayerConverter.convertAddPlayerDtoToEntity(playerDTO));
    }
    @DeleteMapping("/{id}")
    public void deletePlayerById(@PathVariable Long id) {
        this.playerService.deletePlayerById(id);
    }
    @GetMapping("/{id}")
    public PlayerDTO getPlayerById(@PathVariable Long id) {
        return PlayerConverter.convertPlayerEntityToDto(this.playerService.getPlayerById(id));
    }
    @PatchMapping("/{id}")
    public void editPlayerById(@PathVariable Long id, @RequestBody AddPlayerDTO playerDTO) {
        this.playerService.editPlayerById(id, PlayerConverter.convertAddPlayerDtoToEntity(playerDTO));
    }
    @GetMapping("/{id}/name")
    public String getPlayerNameById(@PathVariable Long id) {
        return this.playerService.getNameById(id);
    }
}