package com.example.spring_learn.QuickPoll.DTO;

import lombok.Data;

//The OptionCount DTO contains the ID of the option and a count of votes casted for that option.
@Data
public class OptionCount {
    private Long optionId;
    private int count;
}