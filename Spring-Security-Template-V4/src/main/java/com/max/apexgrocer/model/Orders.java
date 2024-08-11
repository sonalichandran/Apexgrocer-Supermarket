package com.max.apexgrocer.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long orderId;
    private String address;
    private long number;
    private long cost;
    private String status;
    @ManyToOne
    @JoinColumn(name="uid")
    @JsonIgnore
    private User user;
    @OneToMany(mappedBy="orders",cascade=CascadeType.ALL)
    @JsonManagedReference
  
    private List<Product> product;
   
    
  
    
    
}
