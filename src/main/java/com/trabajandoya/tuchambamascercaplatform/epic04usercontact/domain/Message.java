package com.trabajandoya.tuchambamascercaplatform.epic04usercontact.domain;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private Long id;
    private String sender;
    private String receiver;
    private String content;
    private LocalDateTime timestamp;

    // constructor, getters, setters
}
