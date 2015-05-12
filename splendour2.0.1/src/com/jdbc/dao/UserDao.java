package com.jdbc.dao;

import com.jdbc.domin.Butterfly;
import com.jdbc.domin.Tool;
import com.jdbc.domin.User;

public interface UserDao {

	public int register(String newname, String newpass);

	public String newTool(String newname);

	public String newBtf(String newname);

	public int login(String name, String password);

	public User searchUser(String name);

	public Tool[] searchTool(String username);

	public Butterfly[] searchBtf(String username);

	public int updateUser(String form, String article, String varia, String user);

	public int updateBtf(String form, String article, String varia,
			String user, String Btfname);

	public int updateTool(String form, String article, String varia,
			String user, String Toolname);

}
