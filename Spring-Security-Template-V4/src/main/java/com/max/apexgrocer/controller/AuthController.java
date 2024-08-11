package com.max.apexgrocer.controller;

import static org.springframework.http.HttpStatus.OK;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.apexgrocer.auth.LoginRequest;
import com.max.apexgrocer.auth.RegisterRequest;
import com.max.apexgrocer.config.LogoutUtil;
import com.max.apexgrocer.model.Orders;
import com.max.apexgrocer.model.User;
import com.max.apexgrocer.repo.OrderRepository;
import com.max.apexgrocer.repo.UserRepo;
import com.max.apexgrocer.service.AuthService;
import com.max.apexgrocer.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for user authentication")
public class AuthController {
    @Autowired
    private OrderRepository or;
    @Autowired
    private UserRepo ur;
    @Autowired
    private UserService us;

    private final AuthService authService;
    @Autowired
    private LogoutUtil lu;

    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
    public ResponseEntity<?> register(@Parameter(description = "Registration details of the user") @RequestBody RegisterRequest registerRequest) {
        return new ResponseEntity<>(authService.register(registerRequest), OK);
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate user", description = "Allows users to authenticate by providing valid login credentials.")
    public ResponseEntity<?> login(@Parameter(description = "Login credentials of the user") @RequestBody LoginRequest loginRequest) {
        return new ResponseEntity<>(authService.login(loginRequest), OK);
    }
     @GetMapping("/getbyemail/{email}")
    public Optional<User> getById(@PathVariable String email)
    {
        return ur.findByEmail(email);

    }
    @DeleteMapping("/deletebyid/{uid}")
    public String delete(@PathVariable Long uid)
    {
        return us.deleteuser(uid);
    }
    @PutMapping("/putbyid/{Id}")
    public User putById(@RequestBody User u,@PathVariable Long Id)
    {
        Optional<User> found=ur.findById(Id);
        if(found.isPresent())
        {
            User existing=found.get();
            existing.setEmail(u.getEmail());
            existing.setPassword(u.getPassword());
            existing.setUsername(u.getUsername());
            return ur.save(existing);

        }
        return ur.save(u);
        
    }
    @GetMapping("/getorders/{email}")
    public List<Orders> getOrders(@PathVariable String email)
    {
        return us.getOrders(email);
    }
    @PostMapping("/logout")
    @Operation(summary = "Logout the user", description = "Allows users to logout by invalidating their JWT token.")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        lu.logout(request, response, authentication);
        return new ResponseEntity<>("Logout successful", OK);
    }


    
   
}
