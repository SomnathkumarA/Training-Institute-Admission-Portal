package com.springapp.RegisterLogin.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.UserRepository;
import com.springapp.RegisterLogin.Model.User;
import com.springapp.RegisterLogin.Repository.LoginUserRepo;
@Service
public class LoginUserService {


    


    @Autowired
    private LoginUserRepo userRepository;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
