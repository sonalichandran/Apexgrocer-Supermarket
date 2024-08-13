package com.max.apexgrocer.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.max.apexgrocer.model.HomeProduct;

public interface HomeProductRepo extends JpaRepository<HomeProduct,Long>{

    List<HomeProduct> findByProductcategory(String productcategory);


}


