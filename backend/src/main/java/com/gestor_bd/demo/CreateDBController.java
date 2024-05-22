package com.gestor_bd.demo;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
public class CreateDBController {

    @Autowired
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

    @PostMapping("/insert")
    @Transactional
    public String insert(@RequestBody String sqlQuery) {
        try{
            entityManager.createNativeQuery(sqlQuery).executeUpdate();
            return "Sentence "+sqlQuery+" executed successfully";
        } catch (Exception e){
            return "Error executing script "+e.getMessage();
        }
    }
    
    @PostMapping("/drop-table")
    @Transactional
    public String dropTable(@RequestBody String sqlQuery) {
        try{
            entityManager.createNativeQuery(sqlQuery).executeUpdate();
            return "Table "+sqlQuery+" was dropped successfully";
        } catch (Exception e){
            return "Error dropping the table "+e.getMessage();
        }
    }

    @GetMapping("/list-tables/{databaseName}")
    public List<String> getTables(@PathVariable String databaseName) {
        String sqlQuery = "SHOW TABLES FROM " + databaseName;
        List<String> tables = entityManager.createNativeQuery(sqlQuery).getResultList();
        return tables;
    }

    @GetMapping("/list-database")
    public List<String> getDatabases(){
        String sqlQuery = "show databases";
        List<String> databases = entityManager.createNativeQuery(sqlQuery).getResultList();
        return databases;
    }

    @GetMapping("/list-attributes/{databaseName}/{tableName}")
    public List<String> getAttributes(@PathVariable String databaseName, @PathVariable String tableName) {
        //System.out.println(databaseName+" | "+tableName);
        String sqlQuery = "SHOW COLUMNS FROM " + databaseName + "." + tableName;
        //System.out.println("sqlQuery: "+sqlQuery);
        List<Object[]> columns = entityManager.createNativeQuery(sqlQuery).getResultList();
        //System.out.println(columns.stream().map(column -> (String) column[0]).collect(Collectors.toList()));
        return columns.stream().map(column -> (String) column[0]).collect(Collectors.toList());
    }

    @GetMapping("/list-users")
    public List<String> getUsers() {
        String sqlQuery = "SELECT user, authentication_string FROM mysql.user";
        List<Object[]> users = entityManager.createNativeQuery(sqlQuery).getResultList();
        return users.stream()
                     .map(user -> "User: " + user[0] + ", Password: " + user[1])
                     .collect(Collectors.toList());
    }

    @GetMapping("/get-user/{username}")
    public List<String> getUserByUsername(@PathVariable String username) {
        String sqlQuery = "SELECT user, authentication_string FROM mysql.user WHERE user = :username";
        List<Object[]> users = entityManager.createNativeQuery(sqlQuery)
                                             .setParameter("username", username)
                                             .getResultList();
        return users.stream()
                     .map(user -> "User: " + user[0] + ", Password: " + user[1])
                     .collect(Collectors.toList());
    }
}
