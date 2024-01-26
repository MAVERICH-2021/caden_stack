package com.example.spring_learn.QuickPoll;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Poll {
    //add column fields
    @Column(name = "POLL_ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "QUESTION")
    private String question;

    @JoinColumn(name = "POLL_ID")
    @OneToMany(cascade = CascadeType.ALL)
    @OrderBy
    private Set<Option> options;
}
