package com.max.apexgrocer.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class LoginRequest {
    private String username;
    private String password;
}