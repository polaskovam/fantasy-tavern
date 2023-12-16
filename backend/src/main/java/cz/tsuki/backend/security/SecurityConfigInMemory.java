//package cz.tsuki.backend.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.provisioning.JdbcUserDetailsManager;
//import org.springframework.security.provisioning.UserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//import javax.sql.DataSource;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfigInMemory {
//
//
//    //add support for JDBC authentication
//    @Bean
//    public UserDetailsManager userDetailsManager(DataSource dataSource) {
//        return new JdbcUserDetailsManager(dataSource);
//    }
//
//
//
//
//
//
//
//
//
//
//    //restricting access based on roles
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http.authorizeHttpRequests(configurer ->
//                configurer
//                        .requestMatchers(new AntPathRequestMatcher("/api/auth/**")).permitAll()
//                        .requestMatchers(new AntPathRequestMatcher("/seed/**")).hasRole("BARTENDER")
//                        .requestMatchers(new AntPathRequestMatcher("/api/**")).hasAnyRole("BARTENDER", "DRUNK"));
//
//        //use HTTP Basic authentication
//        http.httpBasic(Customizer.withDefaults());
//
//        http.csrf(AbstractHttpConfigurer::disable);
//        return http.build();
//    }
//
//    //in-memory user details manager
//    //when defined, SB won't create default user
//    //this only works if i don´t have defined my custom UserDetailsService bean!!!!!
////    @Bean
////    public InMemoryUserDetailsManager inMemoryUserDetailsManager() {
////
////        UserDetails nathan = User.builder()
////                .username("Nathanos")
////                .password("{noop}nathan") //no operation = stored as plain text X bcrypt
////                .roles("DRUNK")
////                .build();
////
////        UserDetails velorana = User.builder()
////                .username("Velorana")
////                .password("{noop}velo123") //no operation = stored as plain text X bcrypt
////                .roles("BARTENDER")
////                .build();
////
////        UserDetails kasei = User.builder()
////                .username("Kasei")
////                .password("{noop}IwillMURDERyouINyourSLEEP") //no operation = stored as plain text X bcrypt
////                .roles("BARTENDER")
////                .build();
////
////        return new InMemoryUserDetailsManager(nathan, velorana, kasei);
////    }
//}
