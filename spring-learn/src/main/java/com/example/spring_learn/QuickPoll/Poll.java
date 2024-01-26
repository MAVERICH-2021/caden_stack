package com.example.spring_learn.QuickPoll;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Poll {
    //add column fields
    @Column(name = "POLL_ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "QUESTION")
    private String question;

    @JoinColumn(name = "POLL_ID")
    @OneToMany(cascade = CascadeType.ALL)
    @OrderBy
    @Size(min=2, max = 6)
    private Set<Option> options;
}
