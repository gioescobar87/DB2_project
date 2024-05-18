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

    @PostMapping("/delete-database")
    @Transactional
    public String deleteDatabase(@RequestBody String sqlQuery) {
        try{
            entityManager.createNativeQuery(sqlQuery).executeUpdate();
            return "Database deleted successfully";
        } catch (Exception e){
            return "Error deleting database "+e.getMessage();
        }
    }

    @PostMapping("/create-table")
    @Transactional
    public String createTable(@RequestBody String sqlQuery) {
        try{
            entityManager.createNativeQuery(sqlQuery).executeUpdate();
            return "Table "+sqlQuery+" created successfully";
        } catch (Exception e){
            return "Error creating the table "+e.getMessage();
        }
    }

    /*
     *   deleteDatabase(sentence:String){
    return this.http.post<Database>(this.url+"/delete-database",sentence);
  }
     */
}
