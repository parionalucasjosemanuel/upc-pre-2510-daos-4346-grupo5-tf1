package com.trabajandoya.tuchambamascercaplatform.epic04usercontact.infrastructure;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MessageRepository extends JpaRepository<MessageEntity, Long> {
    List<MessageEntity> findByReceiver(String receiver);
}
