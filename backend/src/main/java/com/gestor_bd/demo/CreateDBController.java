package com.gestor_bd.demo;

import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class CreateDBController {

    @PersistenceContext
    private EntityManager entityManager;

    @PostMapping("/create-database")
    @Transactional
    public String createDatabase(@RequestBody String sqlQuery) {
        try{
            entityManager.createNativeQuery(sqlQuery).executeUpdate();
            return "Database created successfully";
        } catch (Exception e){
            return "Error creating database "+e.getMessage();
        }
    }
}
