//package cz.tsuki.backend.security.services;
//
//import cz.tsuki.backend.security.models.User;
//import cz.tsuki.backend.security.repositories.UserRepository;
//import lombok.AllArgsConstructor;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//@AllArgsConstructor
//public class MyUserDetailsService implements UserDetailsService {
//private final UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username)
//                .orElseThrow(()->new UsernameNotFoundException("User with username: " + username +" not found."));
//        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), user.getAuthorities());
//    }
//}
