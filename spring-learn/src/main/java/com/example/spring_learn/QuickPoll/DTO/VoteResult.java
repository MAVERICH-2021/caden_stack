package com.example.spring_learn.QuickPoll.DTO;

import lombok.Data;

import java.util.Collection;

//all options vote result
@Data
public class VoteResult {
    private int totalVotes;
    private Collection<OptionCount> results;
}
