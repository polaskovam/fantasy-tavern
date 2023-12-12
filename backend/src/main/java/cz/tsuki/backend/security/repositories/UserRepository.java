package cz.tsuki.backend.security.repositories;

import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE TYPE(u)= Drunk")
    List<Drunk> findAllDrunks();

    Optional<User> findByUsername(String username);
}
