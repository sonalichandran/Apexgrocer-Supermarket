package com.max.apexgrocer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.apexgrocer.model.Product;
import com.max.apexgrocer.repo.ProductRepository;
import com.max.apexgrocer.service.ProductService;


import java.util.*;

@RestController
@RequestMapping("/product")

public class ProductController {
    @Autowired
    ProductRepository pr;
    @Autowired
    ProductService ps;

    @PostMapping("/register/{orderId}")
    public Product post(@RequestBody Product p,@PathVariable Long orderId) {
        return ps.addProducts(p,orderId);
    }

    @GetMapping("/getall")
    public List<Product> getAll() {
        return pr.findAll();
    }
    @GetMapping("/getById/{Id}")
    public Optional<Product> getById(@PathVariable Long Id)
    {
        return pr.findById(Id);

    }
    @DeleteMapping("/deleteById/{Id}") 
    public String deleteById(@PathVariable Long Id)
    {
        pr.deleteById(Id);
        return "Product of Id "+Id+" deleted successfully";
    }
    @PutMapping("/putById/{Id}")
    public Product putById(@PathVariable Long Id,@RequestBody Product p)
    {
        Optional<Product> found=pr.findById(Id);
        if(found.isPresent())
        {
            Product existing=found.get();
            existing.setProductName(p.getProductName());
            existing.setProductcategory(p.getProductcategory());
            existing.setProductcost(p.getProductcost());
            return pr.save(existing);

        }
        return pr.save(p);


    }
}
