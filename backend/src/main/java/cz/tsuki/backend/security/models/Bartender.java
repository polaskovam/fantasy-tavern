package cz.tsuki.backend.security.models;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Builder;

@Entity
@Builder
@DiscriminatorValue("BARTENDER")
public class Bartender extends User {
    public Bartender() {
        this.setRole(Role.BARTENDER);
    }

    @Override
    public boolean canBuyBooze() {
        return true;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}