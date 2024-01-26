package com.example.spring_learn.Post;

import org.springframework.stereotype.Repository;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

@Repository
public class PostRepository {
    private final Set<Post> posts = new CopyOnWriteArraySet<>(); //in-memory database h2
    public void addPost(Post post) {
        posts.add(post);
    }
    public Set<Post> findAllPosts() {
        return posts;
    }
}
