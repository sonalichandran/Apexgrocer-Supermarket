package com.max.apexgrocer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
    
    
}
