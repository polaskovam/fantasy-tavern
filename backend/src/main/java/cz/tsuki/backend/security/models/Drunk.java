package cz.tsuki.backend.security.models;

import cz.tsuki.backend.models.Race;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("DRUNK")
public class Drunk extends User {
    private boolean adult;
    public Drunk() {
        this.setRole(Role.DRUNK);
    }

    @Override
    public boolean canBuyBooze() {
        return adult;
    }

    public Drunk(Long userId, String username, String password, int wallet, Role role, Race race, boolean adult) {
        super(userId, username, password, wallet, role, race);
        this.adult = adult;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}