package mx.edu.utez.viba22.service.bitacora;

import mx.edu.utez.viba22.model.bitacora.Bitacora;
import mx.edu.utez.viba22.model.bitacora.BitacoraRepository;
import mx.edu.utez.viba22.model.user.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class BitacoraService {
    private final BitacoraRepository bitacoraRepository;

    public BitacoraService(BitacoraRepository bitacoraRepository) {
        this.bitacoraRepository = bitacoraRepository;
    }

    public void registrarEvento(User usuario, String tipoOperacion) {
        Bitacora bitacora = new Bitacora();
        bitacora.setUsuario(usuario);
        bitacora.setFechaHora(LocalDateTime.now());
        bitacora.setTipoOperacion(tipoOperacion);
        bitacoraRepository.save(bitacora);
    }

    public List<Bitacora> obtenerTodos() {
        return bitacoraRepository.findAll();
    }
}

