package com.example.loginreg.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.loginreg.entity.User;

public interface UsersRepo extends JpaRepository<User,String>
{

}
