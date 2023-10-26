package cz.tsuki.backend.controllers;

import cz.tsuki.backend.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class APIController {
    private final ProductService productService;


    @GetMapping("/hello")
    public ResponseEntity<?> hello() {
        return ResponseEntity.status(200).body("Hello traveler.");
    }

    @GetMapping("/menu")
    public ResponseEntity<?> menu() {
        return ResponseEntity.status(200).body(productService.getAll());
    }


}
