package com.example.loginreg.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.loginreg.Requests.LoginRequest;
import com.example.loginreg.Service.UserService;
import com.example.loginreg.entity.User;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController 
{
    @Autowired
    UserService userService;
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user)
    {
        return userService.addUser(user);
    }

    @PostMapping("/loginUser")
    public Boolean loginUser(@RequestBody LoginRequest loginRequest)
    {
        return userService.loginUser(loginRequest);
    }
}
