package com.example.spring_learn.Post;

import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class PostService {
//    private final PostRepo postRepo;
    private final PostRepository postRepo;
    @Autowired
    public PostService(PostRepository postRepo) {
        this.postRepo = postRepo;
    }
    public void addPost(Post post) {
        postRepo.addPost(post);
        //System.out.println(post);
    }

    public Set<Post> findAllPosts() {
        return postRepo.findAllPosts();
    }
}
