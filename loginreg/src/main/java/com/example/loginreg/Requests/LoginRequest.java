package com.example.loginreg.Requests;

public class LoginRequest 
{
    private String userId;
    private String password;

    // Default Constructor
    public LoginRequest() {
    }

    // Parameterized Constructor
    public LoginRequest(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    // Getter and Setter for userId
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    // Getter and Setter for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}