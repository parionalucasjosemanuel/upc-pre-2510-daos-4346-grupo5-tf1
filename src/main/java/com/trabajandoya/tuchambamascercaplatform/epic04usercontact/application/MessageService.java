package com.trabajandoya.tuchambamascercaplatform.epic04usercontact.application;

import com.trabajandoya.tuchambamascercaplatform.epic04usercontact.domain.Message;
import com.trabajandoya.tuchambamascercaplatform.epic04usercontact.infrastructure.MessageEntity;
import com.trabajandoya.tuchambamascercaplatform.epic04usercontact.infrastructure.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageService {
    private final MessageRepository repo;

    public MessageService(MessageRepository repo) {
        this.repo = repo;
    }

    public List<Message> getAllForUser(String receiver) {
        return repo.findByReceiver(receiver).stream().map(this::toDomain).collect(Collectors.toList());
    }

    public Message send(Message msg) {
        return toDomain(repo.save(toEntity(msg)));
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    private Message toDomain(MessageEntity e) {
        return new Message(e.getId(), e.getSender(), e.getReceiver(), e.getContent(), e.getTimestamp());
    }

    private MessageEntity toEntity(Message m) {
        MessageEntity e = new MessageEntity();
        e.setId(m.getId());
        e.setSender(m.getSender());
        e.setReceiver(m.getReceiver());
        e.setContent(m.getContent());
        e.setTimestamp(m.getTimestamp());
        return e;
    }
}
