package cz.tsuki.backend.dtos;

import cz.tsuki.backend.models.Order;
import cz.tsuki.backend.models.Race;
import cz.tsuki.backend.security.models.User;
import lombok.Data;

import java.util.List;

@Data
public class DrunkWithOrdersDTO {
    private Long drunkId;
    private String username;
    private boolean isAdult;
    private Race race;
    private int wallet;
    private List<Order> orders;

    public DrunkWithOrdersDTO(User user) {
        this.drunkId = user.getId();
        this.username = user.getUsername();
        this.isAdult = user.canBuyBooze();
        this.wallet = user.getWallet();
        this.orders = user.getOrders();
    }
}
