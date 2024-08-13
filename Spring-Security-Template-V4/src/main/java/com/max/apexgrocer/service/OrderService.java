package com.max.apexgrocer.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.max.apexgrocer.model.Orders;
import com.max.apexgrocer.model.Product;
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
    public byte[] generateInvoice(long orderId) throws IOException, DocumentException {
        Optional<Orders> order1 = or.findById(orderId);

        if (order1 == null) {
            throw new IllegalArgumentException("Order not found");
        }
        Orders order=order1.get();
        Document document = new Document();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        PdfWriter.getInstance(document, baos);
        document.open();
        document.add(new Paragraph("Invoice"));
        document.add(new Paragraph("Order ID: " + order.getOrderId()));
        document.add(new Paragraph("Address: " + order.getAddress()));
        document.add(new Paragraph("Number: " + order.getNumber()));
        document.add(new Paragraph("Cost: Rs." + order.getCost()));
        document.add(new Paragraph("Status: " + order.getStatus()));

        for (Product product : order.getProduct()) {
            document.add(new Paragraph("Product Name: " + product.getProductName()));
            document.add(new Paragraph("Category: " + product.getProductcategory()));
            document.add(new Paragraph("Cost: Rs." + product.getProductcost()));
        }

        document.close();

        return baos.toByteArray();
    }
    
    
}
