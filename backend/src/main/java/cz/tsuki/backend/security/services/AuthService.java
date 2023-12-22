package cz.tsuki.backend.security.services;

import cz.tsuki.backend.security.dto.LoginCredentials;
import cz.tsuki.backend.security.dto.RegisterRequest;
import cz.tsuki.backend.security.dto.RegisterRequestBartender;
import cz.tsuki.backend.security.models.Bartender;
import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

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

    public boolean login(LoginCredentials loginCredentials) {
        try {
          Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginCredentials.getUsername(),
                            loginCredentials.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return true;
        } catch (AuthenticationException e) {
            return false;
        }
    }
}
