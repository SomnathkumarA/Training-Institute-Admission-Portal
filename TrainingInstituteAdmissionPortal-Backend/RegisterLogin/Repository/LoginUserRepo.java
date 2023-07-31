package com.springapp.RegisterLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.RegisterLogin.Model.User;

public interface LoginUserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
