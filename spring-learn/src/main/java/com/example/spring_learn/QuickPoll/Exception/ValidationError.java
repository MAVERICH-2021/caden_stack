package com.example.spring_learn.QuickPoll.Exception;

import lombok.Data;

@Data
public class ValidationError {
    private String code;
    private String message;
}
