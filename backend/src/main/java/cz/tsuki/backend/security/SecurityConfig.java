package cz.tsuki.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


    //in-memory user details manager
    //when defined, SB won't create default user
    //this only works if i don´t have defined my custom UserDetailsService bean!!!!!
    @Bean
    public InMemoryUserDetailsManager inMemoryUserDetailsManager() {

        UserDetails nathan = User.builder()
                .username("Nathanos")
                .password("{noop}nathan") //no operation = stored as plain text X bcrypt
                .roles("DRUNK")
                .build();

        UserDetails velorana = User.builder()
                .username("Velorana")
                .password("{noop}velo123") //no operation = stored as plain text X bcrypt
                .roles("BARTENDER")
                .build();

        UserDetails kasei = User.builder()
                .username("Kasei")
                .password("{noop}IwillMURDERyouINyourSLEEP") //no operation = stored as plain text X bcrypt
                .roles("BARTENDER")
                .build();

        return new InMemoryUserDetailsManager(nathan, velorana, kasei);
    }

}
