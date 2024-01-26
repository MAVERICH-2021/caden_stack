package com.example.spring_learn.QuickPoll.Exception;

public class MethodArgumentNotValidException extends RuntimeException {
    private static final long serialVersionUID = 1L; //what is this? this is a serializable class
    public MethodArgumentNotValidException(String message) {
        super(message);
    }
    public MethodArgumentNotValidException(String message, Throwable cause) {
        super(message, cause);
    }
}
