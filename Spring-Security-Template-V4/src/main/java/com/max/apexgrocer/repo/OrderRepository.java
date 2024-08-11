package com.max.apexgrocer.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.apexgrocer.model.Orders;

public interface OrderRepository extends JpaRepository<Orders,Long> {
    public Optional<Orders> findById(Long Id);
    List<Orders> findByUserUid(Long uid);
  
    
}
