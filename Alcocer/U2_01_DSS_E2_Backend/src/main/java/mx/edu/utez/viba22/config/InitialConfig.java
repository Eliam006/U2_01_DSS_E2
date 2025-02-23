package mx.edu.utez.viba22.config;

import mx.edu.utez.viba22.model.user.User;
import mx.edu.utez.viba22.model.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;
import java.util.Optional;

@Configuration


public class InitialConfig implements CommandLineRunner {
    private final UserRepository usuarioRepository;
    private final PasswordEncoder encoder;

    public InitialConfig(UserRepository usuarioRepository, PasswordEncoder encoder) {
        this.usuarioRepository = usuarioRepository;
        this.encoder = encoder;
    }


    @Override
    @Transactional(rollbackFor = {SQLException.class})
    public void run (String... args) throws Exception{

        User user = getOrSaveUser(
                new User("oscar", "oscar@gmail.com", encoder.encode("oscar"), "777453837", 20)
        );

    }


    @Transactional
    public User getOrSaveUser(User user) {
        Optional<User> foundUser = usuarioRepository.findByEmail(user.getEmail());
        return foundUser.orElseGet(() -> {
            return usuarioRepository.saveAndFlush(user);
        });
    }

}


