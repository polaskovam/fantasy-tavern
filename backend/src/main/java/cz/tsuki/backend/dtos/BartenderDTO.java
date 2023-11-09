package cz.tsuki.backend.dtos;

import cz.tsuki.backend.models.Race;
import cz.tsuki.backend.security.models.Role;
import cz.tsuki.backend.security.models.User;
import lombok.Data;

@Data
public class BartenderDTO {

    private Long userId;
    private String username;
    private Race race;
    private int wallet;
    //for D&D session where game master logs his party to attend a tavern
    //this idea will be consulted later
    //private List<Drunk> drunks;

    public BartenderDTO(User user) {
        this.userId = user.getUserId();
        this.username = user.getUsername();
        this.race = user.getRace();
        this.wallet = user.getWallet();
    }
}
