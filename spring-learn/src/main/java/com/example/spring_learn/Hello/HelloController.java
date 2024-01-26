package com.example.spring_learn.Hello;

import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import java.util.HashMap;
import java.util.Map;

@Controller
@Component
@RequestMapping("/hello")
public class HelloController {

    private PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer;
    @GetMapping
    public String hello() {
        return "hello";
    }

    @ResponseBody
    @GetMapping("/json")
    public Map<String, String> helloJson() {
        Map<String, String> response = new HashMap<>();
        response.put("name", "Hello Spring Boot");
        response.put("description", "Spring Boot");
        response.put("body", "Spring Boot is Awesome");
        return response;
    }

    @ResponseBody
    @GetMapping("/jackson")
    public ModelAndView helloJackson() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setView(new MappingJackson2JsonView());
        modelAndView.addObject("name", "Hello Spring Boot");
        modelAndView.addObject("description", "Spring Boot");
        modelAndView.addObject("body", "Spring Boot is Awesome");
        return modelAndView;
    }
}
