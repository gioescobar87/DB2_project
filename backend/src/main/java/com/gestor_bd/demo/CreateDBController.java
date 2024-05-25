package com.gestor_bd.demo;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

import java.sql.Statement;
import java.util.*;

import org.springframework.web.bind.annotation.RestController;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import jakarta.persistence.PersistenceContext;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@RestController
public class CreateDBController {

  @Autowired
  @PersistenceContext
  private EntityManager entityManager;

  @PostMapping("/create-database")
  @Transactional
  public String createDatabase(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "Database created successfully";
    } catch (Exception e) {
      return "Error creating database " + e.getMessage();
    }
  }

  @PostMapping("/delete-database")
  @Transactional
  public String deleteDatabase(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "Database deleted successfully";
    } catch (Exception e) {
      return "Error deleting database " + e.getMessage();
    }
  }

  @PostMapping("/create-table")
  @Transactional
  public String createTable(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "Table " + sqlQuery + " created successfully";
    } catch (Exception e) {
      return "Error creating the table " + e.getMessage();
    }
  }

  @PostMapping("/insert")
  @Transactional
  public String insert(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "Sentence " + sqlQuery + " executed successfully";
    } catch (Exception e) {
      return "Error executing script " + e.getMessage();
    }
  }

  @PostMapping("/drop-table")
  @Transactional
  public String dropTable(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "Table dropped successfully";
    } catch (Exception e) {
      return "Error dropping the table " + e.getMessage();
    }
  }

  @PostMapping("/drop-view")
  @Transactional
  public String dropView(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "View dropped successfully";
    } catch (Exception e) {
      return "Error dropping view " + e.getMessage();
    }
  }

  @PostMapping("/truncate-table")
  @Transactional
  public String truncateTable(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "Truncate successful";
    } catch (Exception e) {
      return "Error during truncate: " + e.getMessage();
    }
  }

  @PostMapping("/create-index")
  @Transactional
  public String createIndex(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "Index created successfully";
    } catch (Exception e) {
      return "Error creating index " + e.getMessage();
    }
  }

  @PostMapping("/create-view")
  @Transactional
  public String createView(@RequestBody String sqlQuery) {
    try {
      entityManager.createNativeQuery(sqlQuery).executeUpdate();
      return "View created successfully";
    } catch (Exception e) {
      return "Error creating view " + e.getMessage();
    }
  }

  @GetMapping("/list-tables/{databaseName}")
  public List<String> getTables(@PathVariable String databaseName) {
    String sqlQuery = "SHOW TABLES FROM " + databaseName;
    List<String> tables = entityManager.createNativeQuery(sqlQuery).getResultList();
    return tables;
  }

  @GetMapping("/list-database")
  public List<String> getDatabases() {
    String sqlQuery = "show databases";
    List<String> databases = entityManager.createNativeQuery(sqlQuery).getResultList();
    return databases;
  }

  @GetMapping("/list-attributes/{databaseName}/{tableName}")
  public List<String> getAttributes(@PathVariable String databaseName, @PathVariable String tableName) {
    // System.out.println(databaseName+" | "+tableName);
    String sqlQuery = "SHOW COLUMNS FROM " + databaseName + "." + tableName;
    // System.out.println("sqlQuery: "+sqlQuery);
    List<Object[]> columns = entityManager.createNativeQuery(sqlQuery).getResultList();
    // System.out.println(columns.stream().map(column -> (String)
    // column[0]).collect(Collectors.toList()));
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

  @GetMapping("/select")
  @Transactional
  public List<Map<String, Object>> executeQuery(@RequestParam String databaseName, @RequestParam String sqlQuery) {
    // Switch to the specified database within a transactional context
    entityManager.createNativeQuery("USE " + databaseName).executeUpdate();

    Query query = entityManager.createNativeQuery(sqlQuery);
    List<Object[]> resultList = query.getResultList();

    if (resultList.isEmpty()) {
      // Return an empty list if no results are found
      return Collections.emptyList();
    }

    List<String> columnNames = getColumnNames(sqlQuery);

    return resultList.stream()
        .map(result -> {
          Map<String, Object> resultMap = new HashMap<>();
          for (int i = 0; i < result.length; i++) {
            resultMap.put(columnNames.get(i), result[i]);
          }
          return resultMap;
        })
        .collect(Collectors.toList());
  }

  private List<String> getColumnNames(String sqlQuery) {
    List<String> columnNames = new ArrayList<>();
    try {
      // Unwrap the JDBC Connection from the EntityManager
      Session session = entityManager.unwrap(Session.class);
      session.doWork(connection -> {
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery(sqlQuery);
        ResultSetMetaData metaData = resultSet.getMetaData();
        int columnCount = metaData.getColumnCount();
        for (int i = 1; i <= columnCount; i++) {
          columnNames.add(metaData.getColumnName(i));
        }
        resultSet.close();
        statement.close();
      });
    } catch (Exception e) {
      e.printStackTrace();
    }
    return columnNames;
  }

  @GetMapping("/list-views/{databaseName}")
  public List<String> getViews(@PathVariable String databaseName) {
    String sqlQuery = "SHOW FULL TABLES FROM " + databaseName + " WHERE Table_type = 'VIEW'";
    List<Object[]> resultList = entityManager.createNativeQuery(sqlQuery).getResultList();
    List<String> views = new ArrayList<>();

    for (Object[] row : resultList) {
      views.add((String) row[0]);
    }

    return views;
  }
}
