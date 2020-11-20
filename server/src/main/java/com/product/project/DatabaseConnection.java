package com.product.project;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DatabaseConnection {
	Connection conn;
	public DatabaseConnection(String server,String username,String password,String db){
		try {
		Class.forName("com.mysql.jdbc.Driver");  
		this.conn=DriverManager.getConnection("jdbc:mysql://"+server+":3306/"+db,username,password);  
		}catch(Exception e) {
			System.out.println("Error" + e.toString());
		}
	}
	public Connection getConnection(){
		return conn;
	}
}
