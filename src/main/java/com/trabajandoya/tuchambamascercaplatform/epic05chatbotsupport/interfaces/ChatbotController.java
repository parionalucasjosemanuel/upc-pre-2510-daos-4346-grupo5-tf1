package com.trabajandoya.tuchambamascercaplatform.epic05chatbotsupport.interfaces;

import com.trabajandoya.tuchambamascercaplatform.epic05chatbotsupport.model.ChatbotMessage;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api/chatbot")
@CrossOrigin(origins = "*")
public class ChatbotController {

    private final List<String> phrases = List.of(
        "Keep going, you are doing great!",
        "Every effort counts, don’t give up!",
        "Believe in yourself, new opportunities are coming!",
        "Your perseverance will pay off!",
        "Remember why you started!"
    );

    @PostMapping("/reply")
    public ChatbotMessage reply(@RequestBody String inputText) {
        String input = inputText.toLowerCase();
        boolean isNegative = List.of("frustrated", "sad", "tired", "lost", "discouraged")
                                .stream().anyMatch(input::contains);

        String content = isNegative
                ? phrases.get(new Random().nextInt(phrases.size()))
                : "I’m here to support you. Can you tell me more?";

        return new ChatbotMessage("bot", content, LocalDateTime.now());
    }
}