package com.example.spring_learn.QuickPoll;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Option {
    @Id
    @Column(name = "OPTION_ID")
    @GeneratedValue
    private Long id;
    @Column(name = "OPTION_VALUE")
    private String value;
/*    @ManyToOne
    @JoinColumn(name = "POLL_ID")
    private Poll poll;*/
}
