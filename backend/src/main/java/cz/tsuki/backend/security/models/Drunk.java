package cz.tsuki.backend.security.models;

import cz.tsuki.backend.models.Race;
import cz.tsuki.backend.security.dto.RegisterRequest;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("DRUNK")
public class Drunk extends User {
    private boolean adult;

    public Drunk(RegisterRequest registerRequest) {
        super(registerRequest);
        this.setRole(Role.DRUNK);
        this.adult = registerRequest.isAdult();
    }

    @Override
    public boolean canBuyBooze() {
        return adult;
    }

    public Drunk(Long userId, String username, String password, int wallet, Role role, Race race, boolean adult) {
        super(userId, username, password, wallet, role, race);
        this.adult = adult;
    }
}