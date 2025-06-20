package com.trabajandoya.tuchambamascercaplatform.epic04usercontact.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic04usercontact.application.MessageService;
import com.trabajandoya.tuchambamascercaplatform.epic04usercontact.domain.Message;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class MessageController {

    private final MessageService service;

    public MessageController(MessageService service) {
        this.service = service;
    }

    @GetMapping
    public List<Message> getAllForUser(@RequestParam String receiver) {
        return service.getAllForUser(receiver);
    }

    @PostMapping
    public Message send(@RequestBody Message message) {
        return service.send(message);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
