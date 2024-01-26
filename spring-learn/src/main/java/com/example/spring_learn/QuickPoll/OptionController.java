package com.example.spring_learn.QuickPoll;

import org.aspectj.weaver.ast.Literal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OptionController {
private final OptionRepository optionRepository;
@Autowired
public OptionController(OptionRepository optionRepository) {
        this.optionRepository = optionRepository;
}
    @GetMapping("/options")
    public ResponseEntity<Iterable<Option>> getAllOptions() {
        return new ResponseEntity<>(optionRepository.findAll(), org.springframework.http.HttpStatus.OK);
    }
}
