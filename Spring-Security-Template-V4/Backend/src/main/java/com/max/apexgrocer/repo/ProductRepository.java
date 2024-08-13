package com.max.apexgrocer.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.apexgrocer.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
    Optional<Product> findById(Long Id);
    
    
}
