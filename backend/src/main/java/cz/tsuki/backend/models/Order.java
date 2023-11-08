package cz.tsuki.backend.models;

import cz.tsuki.backend.security.models.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue
    private Long orderId;

    @ManyToOne
    private User user;

    @OneToMany
    private List<OrderItem> items;
    private int totalPrice;

    public Order(User user, List<OrderItem> items) {
        this.user = user;
        this.items = items;

        int sum = 0;
        for (OrderItem oi : items) {
            sum += oi.getProduct().getProductPrice() * oi.getAmount();
        }
        this.totalPrice = sum;

    }
}