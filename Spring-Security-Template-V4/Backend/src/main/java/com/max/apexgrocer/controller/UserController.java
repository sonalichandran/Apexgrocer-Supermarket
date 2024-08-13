package com.max.apexgrocer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.max.apexgrocer.model.Orders;
import com.max.apexgrocer.model.User;
import com.max.apexgrocer.repo.UserRepo;
import com.max.apexgrocer.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.*;
@RestController
@RequestMapping("/request")

public class UserController {
    @Autowired 
    //intead of autowired we can also static final import 
    private UserService us;
    @Autowired
    private UserRepo ur;
    // @GetMapping("/getusers")
    // public List<User> getAllUser() {
    //     return us.getUsers();
    // }
    // @PostMapping("/register")
    // public User addUser(@RequestBody User u)
    // {
    //     return us.addUsers(u);
        
    // }
  
    // @GetMapping("/getbyemail/{email}")
    // public Optional<User> getById(@PathVariable String email)
    // {
    //     return ur.findByEmail(email);

    // }
    // @DeleteMapping("/deletebyid/{uid}")
    // public String delete(@PathVariable Long uid)
    // {
    //     return us.deleteuser(uid);
    // }
    // @PutMapping("/putById/{Id}")
    // public User putById(@RequestBody User u,@PathVariable Long Id)
    // {
    //     Optional<User> found=ur.findById(Id);
    //     if(found.isPresent())
    //     {
    //         User existing=found.get();
    //         existing.setEmail(u.getEmail());
    //         existing.setPassword(u.getPassword());
    //         existing.setUsername(u.getUsername());
    //         return ur.save(existing);

    //     }
    //     return ur.save(u);
        
    // }
  

    
}
