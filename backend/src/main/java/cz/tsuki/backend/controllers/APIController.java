package cz.tsuki.backend.controllers;

import cz.tsuki.backend.dtos.BartenderDTO;
import cz.tsuki.backend.dtos.DrunkWithOrdersDTO;
import cz.tsuki.backend.globalExceptionHandler.UserNotFoundException;
import cz.tsuki.backend.security.models.User;
import cz.tsuki.backend.security.services.UserService;
import cz.tsuki.backend.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @GetMapping("/users") //wont show bartenders
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.status(200).body(userService.getAllDrunks());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> maybeUser = userService.getUserById(id);

        if (maybeUser.isPresent() && maybeUser.get().isBartender(id)) {
            return ResponseEntity.status(200).body(new BartenderDTO(maybeUser.get()));
        } else if (maybeUser.isPresent()) {
            return ResponseEntity.status(200).body(new DrunkWithOrdersDTO(maybeUser.get()));
        } else {
            throw new UserNotFoundException(id);
        }
    }



}