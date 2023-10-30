package cz.tsuki.backend.controllers;

import cz.tsuki.backend.models.Product;
import cz.tsuki.backend.models.Race;
import cz.tsuki.backend.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seed")
@AllArgsConstructor
@CrossOrigin
public class SeedController {

    private ProductService productService;

    @GetMapping("/seed")
    public ResponseEntity<?> createDrinks() {

        Product drink1 = new Product();
        drink1.setProductName("Bloody Mary");
        drink1.setProductPrice(150);
        drink1.setForAdult(true);
        drink1.setRace(Race.ANY);
        drink1.setDescription("No tomato juice, just blood and vodka.");
        productService.save(drink1);

        Product drink2 = new Product();
        drink2.setProductName("GinTon");
        drink2.setProductPrice(100);
        drink2.setForAdult(true);
        drink2.setRace(Race.ANY);
        drink2.setDescription("Just TON of gin.");
        productService.save(drink2);

        Product drink3 = new Product();
        drink3.setProductName("Holy Water");
        drink3.setProductPrice(50);
        drink3.setForAdult(false);
        drink3.setRace(Race.HUMAN);
        drink3.setDescription("Recommended only for priests and paladins.");
        productService.save(drink3);

        Product drink4 = new Product();
        drink4.setProductName("Napalm dreams");
        drink4.setProductPrice(300);
        drink4.setForAdult(true);
        drink4.setRace(Race.UNDEAD);
        drink4.setDescription("Sets shit on fire real quick when you sneeze.");
        productService.save(drink4);

        return ResponseEntity.status(200).body("Drinks created.");
    }
}
