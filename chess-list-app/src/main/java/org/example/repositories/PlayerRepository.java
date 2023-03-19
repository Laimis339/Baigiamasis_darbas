package org.example.repositories;
import jakarta.transaction.Transactional;
import org.example.entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PlayerRepository extends JpaRepository<Player, Long> {
    @Transactional
    void deleteAllByName(String name);
}