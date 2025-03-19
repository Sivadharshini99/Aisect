package com.exampleprgm.springbootproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
 class Mysample {
    @GetMapping("/welcome")
    public String welcome(){
        return "welcome";
    }
    
}
