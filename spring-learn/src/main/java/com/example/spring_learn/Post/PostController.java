package com.example.spring_learn.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;

@Controller
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public String postPage(Model model) {
/*        Post post = new Post();
        post.setTitle("Hello Spring Boot");
        post.setDescription("Spring Boot");
        post.setBody("Spring Boot is Awesome");
        Post post1 = new Post();
        post1.setTitle("Hello Spring Boot");
        post1.setDescription("Spring Boot");
        post1.setBody("Spring Boot is Awesome");*/
        var posts = postService.findAllPosts();
        model.addAttribute("posts", posts);
        return "post";
    }

    @GetMapping("/add")
    public String addPostPage(Model model) {
        model.addAttribute("post", new Post());
        return "addPost";
    }

    @PostMapping
    public String addPost(@ModelAttribute("post") Post post) {
        postService.addPost(post);
        return "redirect:/posts";
    }
}
