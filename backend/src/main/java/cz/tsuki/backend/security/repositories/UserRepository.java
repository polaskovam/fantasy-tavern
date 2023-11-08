package cz.tsuki.backend.security.repositories;

import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE TYPE(u)= Drunk")
    List<Drunk> findAllDrunks();
}
