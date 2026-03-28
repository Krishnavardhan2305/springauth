package com.example.loginreg.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.loginreg.Repository.UsersRepo;
import com.example.loginreg.Requests.LoginRequest;
import com.example.loginreg.entity.User;

@Service
public class UserService 
{
    @Autowired
    UsersRepo usersRepo;

    public User addUser(User user)
    {
        return usersRepo.save(user);
    }

    public Boolean loginUser(LoginRequest loginRequest)
    {
        Optional<User> user = usersRepo.findById(loginRequest.getUserId());

        // Check if user exists
        if (user.isEmpty()) {
            return false;
        }

        // Check password
        User existingUser = user.get();
        if (existingUser.getPassword().equals(loginRequest.getPassword())) {
            return true;
        }

        return false;
    }
}