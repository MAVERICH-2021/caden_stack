package com.example.spring_learn.QuickPoll;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Vote {
    //add id and option fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VOTE_ID")
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "OPTION_ID")
    private Option option;
}
