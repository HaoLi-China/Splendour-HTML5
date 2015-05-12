package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jdbc.dao.UserDao;
import com.jdbc.dao.UserDaoFactory;
import com.jdbc.domin.Butterfly;
import com.jdbc.domin.Tool;
import com.jdbc.domin.User;

@SuppressWarnings("serial")
public class getbtServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			resp.setContentType("text/html;charset=utf-8");
			PrintWriter out = resp.getWriter();
			String username = req.getParameter("username");
			username = URLDecoder.decode(username, "UTF-8");
			System.out.println(username);
			
			UserDao userdao = UserDaoFactory.getInstance().getUserDao();
			User user = userdao.searchUser(username);
			Tool tool[] = userdao.searchTool(username);
			Butterfly btf[] = userdao.searchBtf(username);
			String result = "0?";
			if(user!=null&&tool!=null&&btf!=null){
				result="1?"+user.getMoney()+"?"+user.getExp()+"?"+user.getLevel()+"?";
				for(int i=0;i<5;i++){
					result = result + tool[i].getToolnum() + "?";
				}
				for(int i =0;i<10;i++){
					result = result + btf[i].getBtfnum() + "?";
				}
			}
			out.println(result);
			
			
		} catch (Exception e) {
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}

}
