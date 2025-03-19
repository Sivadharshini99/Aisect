package com.exampleprgm.springbootproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class calculateSum {
    
@GetMapping("/calculation")
    public String calculation(){
        int x = 5; 
        int y = 6; 
        int sum = x + y; 
        return "The sum of " + x + " and " + y + " is: " + sum;
    }
}
