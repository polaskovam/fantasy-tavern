package cz.tsuki.backend.security.services;

import cz.tsuki.backend.security.dto.LoginCredentials;
import cz.tsuki.backend.security.dto.RegisterRequest;
import cz.tsuki.backend.security.dto.RegisterRequestBartender;
import cz.tsuki.backend.security.models.Bartender;
import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.models.User;
import cz.tsuki.backend.security.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<Drunk> getAllDrunks() {
        return userRepository.findAllDrunks();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void register(RegisterRequest registerRequest) {
        Drunk drunk = new Drunk(registerRequest);
        userRepository.save(drunk);
    }

    public void register(RegisterRequestBartender registerRequestB) {
        Bartender bartender = new Bartender(registerRequestB);
        userRepository.save(bartender);
    }

    public void login(LoginCredentials loginCredentials) {
    }
}
