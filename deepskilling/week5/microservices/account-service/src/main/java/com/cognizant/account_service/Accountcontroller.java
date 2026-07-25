package com.cognizant.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Account Microservice Controller (as specified in docx).
 * Method: GET
 * Endpoint: /accounts/{number}
 * Returns: dummy account response (no backend connectivity)
 */
@Restcontroller
public class accountcontroller {

    @GetMapping("/accounts/{number}")
    public account getAccount(@PathVariable String number) {
        // Dummy response as specified in docx
        return new account("00987987973432", "savings", 234343);
    }
}
