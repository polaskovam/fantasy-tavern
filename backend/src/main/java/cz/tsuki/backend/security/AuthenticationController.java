package cz.tsuki.backend.security;

import cz.tsuki.backend.security.dto.LoginCredentials;
import cz.tsuki.backend.security.dto.RegisterRequest;
import cz.tsuki.backend.security.dto.RegisterRequestBartender;
import cz.tsuki.backend.security.dto.SuccessMsg;
import cz.tsuki.backend.security.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthenticationController {

    private final UserService userService;

    @PostMapping("/register-user")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        userService.register(registerRequest);
        return ResponseEntity.status(200).body(new SuccessMsg("User registered successfully!"));
    }

    @PostMapping("/register-bartender")
    public ResponseEntity<?> register(@RequestBody RegisterRequestBartender registerRequestB, @Value("${secretCode}") String secretCode) {
        if (registerRequestB.getSecretCode().equals(secretCode)) {
            userService.register(registerRequestB);
            return ResponseEntity.status(200).body(new SuccessMsg("User registered successfully!"));
        } else {
            return ResponseEntity.status(400).body(new SuccessMsg("Wrong secret code!"));
        }

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginCredentials loginCredentials) {
        userService.login(loginCredentials);
        return ResponseEntity.status(200).body(new SuccessMsg("User logged in successfully!"));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return ResponseEntity.ok(new SuccessMsg("Logged out successfully"));
    }
}
