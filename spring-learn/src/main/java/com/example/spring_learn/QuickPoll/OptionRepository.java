package com.example.spring_learn.QuickPoll;

import org.springframework.data.repository.CrudRepository;

public interface OptionRepository extends CrudRepository<Option, Integer> {
}
