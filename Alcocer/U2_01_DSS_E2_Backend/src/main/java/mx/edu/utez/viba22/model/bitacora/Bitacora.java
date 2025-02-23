package mx.edu.utez.viba22.model.bitacora;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mx.edu.utez.viba22.model.user.User;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Bitacora")
public class Bitacora {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private User usuario;

    private LocalDateTime fechaHora;
    private String tipoOperacion;
}
