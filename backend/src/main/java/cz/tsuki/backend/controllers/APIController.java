package cz.tsuki.backend.controllers;

import cz.tsuki.backend.security.services.UserService;
import cz.tsuki.backend.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@CrossOrigin
public class APIController {
    private final ProductService productService;
    private final UserService userService;

    @GetMapping("/hello")
    @ResponseBody
    public ResponseEntity<?> hello() {
        return ResponseEntity.status(200).body(new String[]{"Hello traveler.", "🤣", "😍"});
    }

    @GetMapping("/menu")
    public ResponseEntity<?> menu() {
        return ResponseEntity.status(200).body(productService.getAll());
    }

    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.status(200).body(userService.getAllDrunks());
    }

}