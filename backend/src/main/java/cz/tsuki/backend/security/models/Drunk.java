package cz.tsuki.backend.security.models;

import cz.tsuki.backend.models.Race;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;

@Entity
@DiscriminatorValue("DRUNK")
public class Drunk extends User {
    private boolean isAdult;
    public Drunk() {
        this.setRole(Role.DRUNK);
    }

    @Override
    public boolean canBuyBooze() {
        return isAdult;
    }

    public Drunk(Long userId, String username, String password, int wallet, Role role, Race race, boolean isAdult) {
        super(userId, username, password, wallet, role, race);
        this.isAdult = isAdult;
    }
}