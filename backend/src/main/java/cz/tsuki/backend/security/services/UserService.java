package cz.tsuki.backend.security.services;

import cz.tsuki.backend.models.Order;
import cz.tsuki.backend.repositories.OrderRepository;
import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.models.User;
import cz.tsuki.backend.security.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    public List<Drunk> getAllDrunks() {
        return userRepository.findAllDrunks();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public List<Order> getOrders(User user) {
        return orderRepository.findAllByUser(user);
    }
}
