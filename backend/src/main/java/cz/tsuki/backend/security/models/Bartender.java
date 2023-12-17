package cz.tsuki.backend.security.models;

import cz.tsuki.backend.security.dto.RegisterRequestBartender;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("BARTENDER")
@NoArgsConstructor
public class Bartender extends User {
    public Bartender(RegisterRequestBartender registerRequestB) {
        super(registerRequestB);
        this.setRole(Role.BARTENDER);
    }

    @Override
    public boolean canBuyBooze() {
        return true;
    }
}