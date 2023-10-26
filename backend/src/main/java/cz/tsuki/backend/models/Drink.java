package cz.tsuki.backend.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Drink {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int price;


}
