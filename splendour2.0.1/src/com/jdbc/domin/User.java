/*
 * 此程序声明一个用户类，用于存储用户的一些相关信息，便于程序的管理
 * 用户只有三个属性，邮箱、昵称和密码
 */

package com.jdbc.domin;

public class User {
    
	private String name;
	private String password;
	private int money;
	private int exp;
	private int level;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getMoney() {
		return money;
	}

	public void setMoney(int money) {
		this.money = money;
	}

	public int getExp() {
		return exp;
	}

	public void setExp(int exp) {
		this.exp = exp;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	
}
