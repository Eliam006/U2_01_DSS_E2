package mx.edu.utez.viba22.controller.bitacora;

import mx.edu.utez.viba22.model.bitacora.Bitacora;
import mx.edu.utez.viba22.service.bitacora.BitacoraService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bitacora")
@CrossOrigin(origins = {"*"})
public class BitacoraController {
    private final BitacoraService bitacoraService;

    public BitacoraController(BitacoraService bitacoraService) {
        this.bitacoraService = bitacoraService;
    }

    @GetMapping("/todos")
    public List<Bitacora> obtenerBitacora() {
        return bitacoraService.obtenerTodos();
    }
}

