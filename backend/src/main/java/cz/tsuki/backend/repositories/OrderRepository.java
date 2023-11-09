package cz.tsuki.backend.repositories;

import cz.tsuki.backend.models.Order;
import cz.tsuki.backend.security.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

    List<Order> findAllByUser(User user);
}
