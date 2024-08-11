package com.max.apexgrocer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.max.apexgrocer.model.Orders;
import com.max.apexgrocer.model.Product;
import com.max.apexgrocer.repo.OrderRepository;
import com.max.apexgrocer.repo.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository pr;
    @Autowired
    private OrderRepository or;
    public Product addProducts(Product p,Long orderId)
    {
        Orders orders=or.findById(orderId).orElse(null);
        if(orders==null)
        {
            return null;
        }
        p.setOrders(orders);
        return pr.save(p);


    }
    
}
