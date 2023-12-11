package cz.tsuki.backend.security.models;

import cz.tsuki.backend.models.Order;
import cz.tsuki.backend.models.Race;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String username;
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

    //orders
    //wallet - which currency? one currency or golds, silver, copper coins?

    public abstract boolean canBuyBooze();

    public boolean isBartender(Long id) {
        return this.role == Role.BARTENDER;
    }
}