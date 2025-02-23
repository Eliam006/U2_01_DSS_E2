package mx.edu.utez.viba22.model.user;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;
    @Column(length = 50, nullable = false)
    private String name;
    @Column (length = 40, nullable = false)
    private String email;
    @Column(length = 150, nullable = false)
    private String password;
    @Column(length = 30, nullable = false)
    private String phone;
    @Column(length = 30, nullable = false)
    private int age;



    public User(Long id_user, String name, String email, String password, String phone, int age) {
        this.id_user = id_user;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }

    public User(String name, String email, String password, String phone, int age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
}

