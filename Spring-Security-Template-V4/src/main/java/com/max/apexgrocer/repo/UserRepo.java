package com.max.apexgrocer.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.max.apexgrocer.model.User;
import java.util.List;


public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User>  findByUsername(String username);
}