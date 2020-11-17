package com.product.project;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ProductController {

	private Connection conn;
	
	ProductController(){
		this.conn = new DatabaseConnection("sql12.freemysqlhosting.net","sql12377076","kd8EtHQUZd","sql12377076").getConnection();
	}
	@CrossOrigin(origins="*")
	@GetMapping("/giveproduct")
	public ArrayList<ProductModel> giveProduct(){
		ArrayList<ProductModel> list = new ArrayList<ProductModel>();
		String query = "select * from product";
		try {
			PreparedStatement pst = conn.prepareStatement(query);
			ResultSet rs = pst.executeQuery();
			while(rs.next()) {
				String id = rs.getString("id");
				String category = rs.getString("category");
				String name = rs.getString("name");
				float price = rs.getFloat("price");
				int quantity = rs.getInt("quantity");
				boolean status = rs.getBoolean("status");
				ProductModel pr = new ProductModel();
				pr.setId(id);
				pr.setName(name);
				pr.setQuantity(quantity);
				pr.setStatus(status);
				pr.setPrice(price);
				pr.setCategory(category);
				list.add(pr);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
	@CrossOrigin(origins="*")
	@PostMapping("/addproduct")
	public ProductModel addProduct(@RequestBody ProductModel pr) {
		
		String query = "insert into product(id,name,category,price,quantity,status) values(?,?,?,?,?,?)"; 
		
		try {
			PreparedStatement pst = conn.prepareStatement(query);
			pst.setString(1, pr.id);
			pst.setString(2, pr.name);
			pst.setString(3, pr.category);
			pst.setFloat(4, pr.price);
			pst.setInt(5, pr.quantity);
			pst.setBoolean(6, pr.status);
			pst.execute();
			return pr;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return new ProductModel();
	}
}