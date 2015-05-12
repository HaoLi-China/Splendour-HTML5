package com.jdbc.dao.impl;

import com.jdbc.JdbcUtils;
import com.jdbc.dao.UserDao;
import com.jdbc.domin.Butterfly;
import com.jdbc.domin.Tool;
import com.jdbc.domin.User;

public class UserDaoJdbcImpl implements UserDao {

	/*
	 * 下面的register方法用于用户注册时数据库处理
	 */
	public int register(String newname, String newpass) {

		// 首先用search方法查找这个用户的注册邮箱是否已经注册过，并根据search方法的返回信息对这个注册方法返回响应的信息
		User user = searchUser(newname);
		if (user != null)
			return 1;

		// 下面是数据库基本操作，及把传入的user参数对象的用户信息属性存入user数据表中
		// 声明一些数据库连接的对象
		java.sql.Connection conn = null;
		java.sql.PreparedStatement ps = null;
		java.sql.ResultSet rs = null;

		// 用于插入一行新用户信息的插入语句
		String sql = "insert into user(username,password,money,exp,level)values(?,?,3000,0,0)";
		try {
			// 2.建立连接
			conn = JdbcUtils.getConnection();
			conn.setAutoCommit(false);
			// 3.创建语句
			ps = conn.prepareStatement(sql);
			// 实现插入语句中的三个问号，防止sql注入问题
			ps.setString(1, newname);
			ps.setString(2, newpass);

			// 4.执行语句
			ps.executeUpdate();

			String r1 = newBtf(newname);
			String r2 = newTool(newname);
			System.out.println(r1 + "   " + r2);
			if (r1.equals("success") && r2.equals("success")) {
				conn.commit();
				return 2; // 注册成功
			} else {
				return 3;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return 3;
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, ps, conn);
		}
	}

	public String newBtf(String newname) {
		java.sql.Connection conn = null;
		java.sql.PreparedStatement ps = null;
		java.sql.ResultSet rs = null;

		// 用于插入一行新用户信息的插入语句
		String sql[] = new String[10];

		try {
			for (int i = 0; i < 10; i++) {
				sql[i] = "insert into butterfly(username,btfname,btfnum)values(?,?,0)";
				// 2.建立连接
				conn = JdbcUtils.getConnection();
				// 3.创建语句
				ps = conn.prepareStatement(sql[i]);
				// 实现插入语句中的三个问号，防止sql注入问题
				ps.setString(1, newname);
				ps.setString(2, "btf" + (i + 1));
				// 4.执行语句
				ps.executeUpdate();
			}
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, ps, conn);
		}
	}

	public String newTool(String newname) {
		java.sql.Connection conn = null;
		java.sql.PreparedStatement ps = null;
		java.sql.ResultSet rs = null;

		// 用于插入一行新用户信息的插入语句
		String sql[] = new String[9];

		try {
			for (int i = 0; i < 5; i++) {
				sql[i] = "insert into tool(username,toolname,toolnum)values(?,?,1)";
				// 2.建立连接
				conn = JdbcUtils.getConnection();
				// 3.创建语句
				ps = conn.prepareStatement(sql[i]);
				// 实现插入语句中的三个问号，防止sql注入问题
				ps.setString(1, newname);
				ps.setString(2, "tool" + (i + 1));
				// 4.执行语句
				ps.executeUpdate();
			}
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, ps, conn);
		}
	}

	/*
	 * 下面的login方法用于用户登录时数据库处理
	 */
	public int login(String name, String password) {
		User user = searchUser(name);
		if (user == null)
			return 1;
		if (user.getPassword().equals(password))
			return 2;
		else
			return 3;
	}

	/*
	 * 下面的search方法用于用户注册时数据库查找是否用户注册邮箱被注册过了
	 */
	public User searchUser(String name) {
		User user = new User();
		java.sql.Connection conn = null;
		java.sql.PreparedStatement ps = null;
		java.sql.ResultSet rs = null;
		String sql = "select * from user where username=?";
		try {
			// 2.建立连接
			conn = JdbcUtils.getConnection();
			// 3.创建语句
			ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			// 4.执行语句
			rs = ps.executeQuery();
			if (rs.next()) {
				user.setName(name);
				user.setPassword(rs.getString("password"));
				user.setExp(rs.getInt("exp"));
				user.setMoney(rs.getInt("money"));
				user.setLevel(rs.getInt("level"));
				return user; // 结果集不为空，用户存在
			} else {
				return null; // 结果集为空，此用户不存在，新用户
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error");
			return null;
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, ps, conn);
		}
	}

	public Butterfly[] searchBtf(String username) {
		Butterfly btf[] = new Butterfly[10];
		for (int i = 0; i <= 9; i++)
			btf[i] = new Butterfly();
		java.sql.Connection conn = null;
		java.sql.PreparedStatement ps = null;
		java.sql.ResultSet rs = null;
		String sql = "select * from butterfly where username=?";
		try {
			// 2.建立连接
			conn = JdbcUtils.getConnection();
			// 3.创建语句
			ps = conn.prepareStatement(sql);
			ps.setString(1, username);
			// 4.执行语句
			rs = ps.executeQuery();
			int i = 0;
			while (rs.next()) {
				btf[i].setUsername(username);
				btf[i].setBtfname(rs.getString("btfname"));
				btf[i].setBtfnum(rs.getInt("btfnum"));
				i++;
			}
			return btf; // 结果集不为空，用户存在
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error");
			return null;
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, ps, conn);
		}
	}

	public Tool[] searchTool(String username) {
		Tool tool[] = new Tool[5];
		for (int i = 0; i < 5; i++)
			tool[i] = new Tool();
		java.sql.Connection conn = null;
		java.sql.PreparedStatement ps = null;
		java.sql.ResultSet rs = null;
		String sql = "select * from tool where username=?";
		try {
			// 2.建立连接
			conn = JdbcUtils.getConnection();
			// 3.创建语句
			ps = conn.prepareStatement(sql);
			ps.setString(1, username);
			// 4.执行语句
			rs = ps.executeQuery();
			int i = 0;
			while (rs.next()) {
				tool[i].setUsername(username);
				tool[i].setToolname(rs.getString("toolname"));
				tool[i].setToolnum(rs.getInt("toolnum"));
				i++;
			}
			return tool; // 结果集不为空，用户存在
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("error");
			return null;
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, ps, conn);
		}
	}

	public int updateUser(String form, String article, String varia, String user) {
		java.sql.Connection conn = null;
		java.sql.Statement st = null;
		java.sql.ResultSet rs = null;
		String sql = "update " + form + " set " + article + " = " + article
				+ " +" + (varia) + " where username = '" + user + "'";
		System.out.println(sql);
		try {
			// 2.建立连接
			conn = JdbcUtils.getConnection();
			// 3.创建语句
			st = conn.createStatement();
			// 4.执行语句
			int i = st.executeUpdate(sql);
			System.out.println("i=" + i);
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, st, conn);
		}
	}

	public int updateBtf(String form, String article, String varia,
			String user, String Btfname) {
		java.sql.Connection conn = null;
		java.sql.Statement st = null;
		java.sql.ResultSet rs = null;
		String sql = "update " + form + " set " + article + " = " + article
				+ " +" + (varia) + " where username = '" + user
				+ "' and btfname = '" + Btfname + "'";
		System.out.println(sql);
		try {
			// 2.建立连接
			conn = JdbcUtils.getConnection();
			// 3.创建语句
			st = conn.createStatement();
			// 4.执行语句
			int i = st.executeUpdate(sql);
			System.out.println("i=" + i);
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, st, conn);
		}
	}

	public int updateTool(String form, String article, String varia,
			String user, String Toolname) {
		java.sql.Connection conn = null;
		java.sql.Statement st = null;
		java.sql.ResultSet rs = null;
		String sql = "update " + form + " set " + article + " = " + article
				+ " +" + (varia) + " where username = '" + user
				+ "' and toolname = '" + Toolname + "'";
		System.out.println(sql);
		try {
			// 2.建立连接
			conn = JdbcUtils.getConnection();
			// 3.创建语句
			st = conn.createStatement();
			// 4.执行语句
			int i = st.executeUpdate(sql);
			System.out.println("i=" + i);
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		} finally {
			// 6.释放资源
			JdbcUtils.free(rs, st, conn);
		}
	}
}
