package cz.tsuki.backend.globalExceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> userNotFound(UserNotFoundException ex) {
        String errorMessage = "User with ID: " + ex.getMessage() + " does not exist.";
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }
}
