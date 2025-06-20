package com.trabajandoya.tuchambamascercaplatform.epic05chatbotsupport.model;

import java.time.LocalDateTime;

public class ChatbotMessage {
    private String sender;
    private String content;
    private LocalDateTime timestamp;

    public ChatbotMessage() {}

    public ChatbotMessage(String sender, String content, LocalDateTime timestamp) {
        this.sender = sender;
        this.content = content;
        this.timestamp = timestamp;
    }

    // getters y setters
}