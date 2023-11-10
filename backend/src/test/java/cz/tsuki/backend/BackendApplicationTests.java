package cz.tsuki.backend;

import cz.tsuki.backend.models.Race;
import cz.tsuki.backend.security.models.Drunk;
import cz.tsuki.backend.security.models.Role;
import cz.tsuki.backend.security.repositories.UserRepository;
import cz.tsuki.backend.security.services.UserService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Optional;

import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class BackendApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @BeforeEach
    void setUp() {

    }


    @Test
    void userIsDrunk() throws Exception{
        Long drunkId = 1L;
        Drunk drunk1 = new Drunk(drunkId, "Nathanos", "marris", 1000, Role.DRUNK, Race.UNDEAD, true);

        when(userService.getUserById(drunkId)).thenReturn(Optional.of(drunk1));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/users/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$.drunkId").value(drunk1.getId()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.username").value(drunk1.getUsername()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.isAdult").value(drunk1.canBuyBooze()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.wallet").value(drunk1.getWallet()))
                .andExpect(MockMvcResultMatchers.jsonPath("$.orders").isArray());


    }

    /*
    mockMvc.perform(MockMvcRequestBuilders.get("/tags").with(csrf()))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.[0].tagName", is("Book")))
        .andExpect(MockMvcResultMatchers.jsonPath("$.[1].tagName", is("Technology")))
        .andExpect(MockMvcResultMatchers.jsonPath("$.[2].tagName", is("Food")))
        .andExpect(MockMvcResultMatchers.jsonPath("$.[3].tagName", is("Family")))
        .andExpect(MockMvcResultMatchers.jsonPath("$.[4].tagName").doesNotExist());
     */

/*
public void testGetUserByIdEndpoint() throws Exception {
        // Mock the userService to return an Optional<User>
        Mockito.when(userService.getUserById(1L)).thenReturn(Optional.of(Your mock User object here ));

        mockMvc.perform(get("/api/users/1"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect( Add more assertions based on your expectations );
}
*/
    /*
     @Test
    void longCallsIn8To4() throws Exception {
        String filepath2 = "otherTestFileLong.csv";

        BigDecimal expected = new BigDecimal("5.2");
        BigDecimal actual = calculator.calculate(filepath2);

        assertEquals(expected, actual);
    }
     */

    /*
    @Test
    public void testGetBartenderById() {
        Long userId = 1L;
        User bartenderUser = new User(userId, "Bartender Ben", true, 100);
        when(userService.getUserById(userId)).thenReturn(Optional.of(bartenderUser));

        ResponseEntity<?> response = userController.getUserById(userId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(BartenderDTO.class, response.getBody().getClass());
    }
     */

    @Test
    void contextLoads() {
    }

}
