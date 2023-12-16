package cz.tsuki.backend.security.dto;

import cz.tsuki.backend.models.Race;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String password;
    private String email;
    private int wallet;
    private Race race;
    private boolean adult;
}
