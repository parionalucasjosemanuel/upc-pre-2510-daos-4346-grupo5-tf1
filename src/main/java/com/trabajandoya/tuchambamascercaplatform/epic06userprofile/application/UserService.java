package com.trabajandoya.tuchambamascercaplatform.epic06userprofile.application;

import com.trabajandoya.tuchambamascercaplatform.epic06userprofile.domain.User;
import com.trabajandoya.tuchambamascercaplatform.epic06userprofile.infrastructure.UserEntity;
import com.trabajandoya.tuchambamascercaplatform.epic06userprofile.infrastructure.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User register(User u) {
        return toDomain(repo.save(toEntity(u)));
    }

    public List<User> login(String email, String password) {
        return repo.findByEmailAndPassword(email, password).stream().map(this::toDomain).collect(Collectors.toList());
    }

    public User update(User u) {
        return toDomain(repo.save(toEntity(u)));
    }

    public Optional<User> getById(Long id) {
        return repo.findById(id).map(this::toDomain);
    }

    public List<User> recover(String email) {
        return repo.findByEmail(email).stream().map(this::toDomain).toList();
    }

    private UserEntity toEntity(User u) {
        UserEntity e = new UserEntity();
        e.setId(u.getId());
        e.setName(u.getName());
        e.setEmail(u.getEmail());
        e.setPassword(u.getPassword());
        e.setPhone(u.getPhone());
        return e;
    }

    private User toDomain(UserEntity e) {
        return new User(e.getId(), e.getEmail(), e.getPassword(), e.getName(), e.getPhone());
    }
}