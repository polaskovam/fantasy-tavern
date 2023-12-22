package cz.tsuki.backend.security.services;

import cz.tsuki.backend.security.dto.LoginCredentials;
import cz.tsuki.backend.security.dto.RegisterRequest;
import cz.tsuki.backend.security.dto.RegisterRequestBartender;
import cz.tsuki.backend.security.models.Bartender;
import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    public void register(RegisterRequest registerRequest) {
        Drunk drunk = new Drunk(registerRequest);
        drunk.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(drunk);
    }

    public void register(RegisterRequestBartender registerRequestB) {
        Bartender bartender = new Bartender(registerRequestB);
        bartender.setPassword(passwordEncoder.encode(registerRequestB.getPassword()));
        userRepository.save(bartender);
    }

    public void login(LoginCredentials loginCredentials) {
    }
}
