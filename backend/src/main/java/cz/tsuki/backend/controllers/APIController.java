package cz.tsuki.backend.controllers;

import cz.tsuki.backend.dtos.BartenderDTO;
import cz.tsuki.backend.dtos.DrunkWithOrdersDTO;
import cz.tsuki.backend.globalExceptionHandler.UserNotFoundException;
import cz.tsuki.backend.security.models.User;
import cz.tsuki.backend.services.ProductService;
import cz.tsuki.backend.services.UserAppService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@CrossOrigin
public class APIController {
    private final ProductService productService;
    private final UserAppService userAppService;

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
        return ResponseEntity.status(200).body(userAppService.getAllDrunks());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> maybeUser = userAppService.getUserById(id);

        if (maybeUser.isPresent() && maybeUser.get().isBartender(id)) {
            return ResponseEntity.status(200).body(new BartenderDTO(maybeUser.get()));
        } else if (maybeUser.isPresent()) {
            return ResponseEntity.status(200).body(new DrunkWithOrdersDTO(maybeUser.get()));
        } else {
            throw new UserNotFoundException(id);
        }
    }


}