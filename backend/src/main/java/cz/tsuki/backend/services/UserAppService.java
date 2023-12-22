package cz.tsuki.backend.services;

import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.models.User;
import cz.tsuki.backend.security.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserAppService {

    @Autowired
    private final UserRepository userRepository;

    public List<Drunk> getAllDrunks() {
        return userRepository.findAllDrunks();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
}
