package cz.tsuki.backend.security.services;

import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<Drunk> getAllDrunks() {
        return userRepository.findAllDrunks();
    }

}
