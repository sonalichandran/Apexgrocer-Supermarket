package com.max.apexgrocer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.apexgrocer.model.Orders;
import com.max.apexgrocer.model.User;
import com.max.apexgrocer.repo.OrderRepository;
import com.max.apexgrocer.repo.UserRepo;

@Service
public class OrderService {
    @Autowired
    private OrderRepository or;
    @Autowired
    private UserRepo ur;
    public Orders addOrders(Orders orders,Long userId)
    {
        User users=ur.findById(userId).orElse(null);
        if(users == null)
        {
            return null;
        }
        orders.setUser(users);
      
        return or.save(orders);

    }
    public List<Orders> getOrdersByUserId(Long userId) {
        return or.findByUserUid(userId);
    }
    
    
}
