
@RestController
@RequestMapping("/api/security")
public class SecurityController {

    @PostMapping("/encrypt")
    public String encrypt(@RequestBody String plain) {
        return AES.encrypt(plain, "trabajandoya-app-secure-key");
    }

    @PostMapping("/decrypt")
    public String decrypt(@RequestBody String cipher) {
        return AES.decrypt(cipher, "trabajandoya-app-secure-key");
    }
}
