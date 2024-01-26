package com.example.spring_learn.QuickPoll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class VoteController {

    private VoteRepository voteRepository;

    @Autowired
    public VoteController(VoteRepository voteRepository) {
        this.voteRepository = voteRepository;
    }

    @PostMapping("/polls/{pollId}/votes")
    public ResponseEntity<?> createVote(@PathVariable Long pollId, @RequestBody Vote vote) {
        voteRepository.save(vote);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setLocation(ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(vote.getId())
                .toUri());

        System.out.println(responseHeaders);
        return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
    }

    //implement findall method
    @GetMapping("/votes")
    public ResponseEntity<Iterable<Vote>> getAllVotes() {
        return new ResponseEntity<>(voteRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/polls/{pollId}/votes")
    public ResponseEntity<Iterable<Vote>> getVotesByPoll(@PathVariable Long pollId) {
        return new ResponseEntity<>(voteRepository.findByPoll(pollId), HttpStatus.OK);
    }
}
