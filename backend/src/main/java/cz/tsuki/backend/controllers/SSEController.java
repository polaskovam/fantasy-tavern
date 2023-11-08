//package cz.tsuki.backend.controllers;
//
//import lombok.AllArgsConstructor;
//import org.springframework.http.MediaType;
//import org.springframework.http.codec.ServerSentEvent;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import reactor.core.publisher.Flux;
//
//@RestController
//@RequestMapping("/sse")
//@AllArgsConstructor
//@CrossOrigin
//public class SSEController {
//
//    @GetMapping(path = "/events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
//    public Flux<ServerSentEvent<String>> streamEvents() {
//        Flux<ServerSentEvent<String>> loginEvents = generateLoginEvents();
//        Flux<ServerSentEvent<String>> logoutEvents = generateLogoutEvents();
//        return Flux.merge(loginEvents, logoutEvents);
//    }
//
//    /*
//    private Flux<ServerSentEvent<String>> generateLoginEvents() {
//        // Logic to generate and send "PlayerLoggedIn" events
//    }
//
//    private Flux<ServerSentEvent<String>> generateLogoutEvents() {
//        // Logic to generate and send "PlayerLoggedOut" events
//    }
//
//     */
//
//}
