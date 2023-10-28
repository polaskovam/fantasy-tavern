package cz.tsuki.backend.controllers;

import cz.tsuki.backend.services.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;


@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class APIController {
    private final ProductService productService;


    @GetMapping("/hello")
    @ResponseBody
    public ResponseEntity<?> hello() {
        return ResponseEntity.status(200).body(new String[] {"Hello traveler.", "🤣", "😍"});
    }

    @GetMapping("/menu")
    public ResponseEntity<?> menu() {
        return ResponseEntity.status(200).body(productService.getAll());
    }


}
