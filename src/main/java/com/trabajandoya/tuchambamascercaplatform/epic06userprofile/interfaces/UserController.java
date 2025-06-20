package com.trabajandoya.tuchambamascercaplatform.epic06userprofile.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic06userprofile.application.UserService;
import com.trabajandoya.tuchambamascercaplatform.epic06userprofile.domain.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @GetMapping("/login")
    public List<User> login(@RequestParam String email, @RequestParam String password) {
        return service.login(email, password);
    }

    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return service.update(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return service.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/recover")
    public List<User> recover(@RequestParam String email) {
        return service.recover(email);
    }
}