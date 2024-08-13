package com.max.apexgrocer.controller;

import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.max.apexgrocer.model.HomeProduct;

import com.max.apexgrocer.repo.HomeProductRepo;



@RestController
@RequestMapping("/homeproduct")
public class HomeProductController {
    @Autowired
    private HomeProductRepo hr;
    private static final Logger logger = LoggerFactory.getLogger(HomeProductController.class);
    @PostMapping("/addproduct")
    public HomeProduct addProduct(@RequestBody HomeProduct hp)
    {
          return hr.save(hp);
    }
    @GetMapping("/getallproduct")
    public List<HomeProduct> getall()
    {
        return hr.findAll();
    }
    @DeleteMapping("/deletebyid/{pid}")
    public String deletebyid(@PathVariable Long pid)
    {
        hr.deleteById(pid);
        return "Product deleted successfully";
    }
    @PutMapping("/updateproduct/{id}")
    public HomeProduct updateProduct(@PathVariable Long id, @RequestBody HomeProduct updatedProduct) {
        Optional<HomeProduct> existingProductOptional = hr.findById(id);
        if (existingProductOptional.isPresent()) {
            HomeProduct existingProduct = existingProductOptional.get();
            existingProduct.setProductName(updatedProduct.getProductName());
            existingProduct.setProductcategory(updatedProduct.getProductcategory());
            existingProduct.setProductcost(updatedProduct.getProductcost());
            existingProduct.setImagePath(updatedProduct.getImagePath());
            return hr.save(existingProduct);
        } else {
            throw new RuntimeException("Product not found with id " + id);
        }
    }
    @GetMapping("/getbycategory/{productcategory}")
    public List<HomeProduct> getbycategory(@PathVariable String productcategory)
    {
        return hr.findByProductcategory(productcategory);
    }
    
    
}
