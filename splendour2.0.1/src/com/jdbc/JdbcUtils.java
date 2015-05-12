/*
 * 此程序是数据库操作的工具类
 * 用于建立数据库的连接和释放数据库资源
 * 可以减少程序中数据库出来的重复代码
 * 使用的是
 */

package com.jdbc;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import com.jdbc.dao.UserDaoFactory;

public final class JdbcUtils {

	private static String url; //本程序要连接数据库的url路径
	private static String user;    //数据库操作的用户名
	private static String password;   //数据库操作的密码
    private static String driver;
	
	//把类构造声明为私有，使用户不能构造一个此类实例，减少不必要的操作
	private JdbcUtils() {
	}

	//静态，用户不可访问，注册数据库的驱动
	static {
		try {
			Properties prop = new Properties();
			InputStream inStream = UserDaoFactory.class.getClassLoader()
					.getResourceAsStream("database.properties");// 这种方法如果次文件在classpath中，就可以导入，可变性强了
			prop.load(inStream);
			url = prop.getProperty("url");
			user = prop.getProperty("user");
			password = prop.getProperty("password");
			driver = prop.getProperty("driver");
			Class.forName(driver);
		} catch (Exception e) {
			throw new ExceptionInInitializerError(e);
		}
	}
	
	//静态方法，可由类名调用，建立数据库连接
	public static Connection getConnection() throws SQLException {
		return DriverManager.getConnection(url, user, password);
	}

	//静态方法，可由类名调用，释放数据库资源
	public static void free(ResultSet rs, Statement st, Connection conn) {
		try {
			if (rs != null)
				rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (st != null)
					st.close();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					if (conn != null)
						conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
