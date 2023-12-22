package cz.tsuki.backend.security.models;

import cz.tsuki.backend.models.Order;
import cz.tsuki.backend.models.Race;
import cz.tsuki.backend.security.dto.RegisterRequest;
import cz.tsuki.backend.security.dto.RegisterRequestBartender;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class User implements UserDetails {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    private int wallet;
    @Enumerated(EnumType.STRING)
    private Role role;
    @Enumerated(EnumType.STRING)
    private Race race;
    @OneToMany(mappedBy = "user")
    List<Order> orders = new ArrayList<>();

    public User(Long id, String username, String password, int wallet, Role role, Race race) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.wallet = wallet;
        this.role = role;
        this.race = race;
    }

    public User(RegisterRequest registerRequest) {
        this.username = registerRequest.getUsername();
        this.email = registerRequest.getEmail();
        this.wallet = registerRequest.getWallet();
        this.race = registerRequest.getRace();
    }

    public User(RegisterRequestBartender registerRequestB) {
        this.username = registerRequestB.getUsername();
        this.email = registerRequestB.getEmail();
        this.wallet = registerRequestB.getWallet();
        this.race = registerRequestB.getRace();
    }

    //orders
    //wallet - which currency? one currency or golds, silver, copper coins?

    public abstract boolean canBuyBooze();

    public boolean isBartender(Long id) {
        return this.role == Role.BARTENDER;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(role.name()));
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