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

@SuppressWarnings("serial")
public class loginServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			resp.setContentType("text/html;charset=utf-8");
			PrintWriter out = resp.getWriter();
			String name = req.getParameter("name");
			String pass = req.getParameter("pass");
			String incheck = req.getParameter("check");
			name = URLDecoder.decode(name, "UTF-8");
			String check = (String) req.getSession().getAttribute("rand");
			System.out.println(name);
			System.out.println(pass);
			System.out.println(incheck);
			System.out.println(check);
			System.out.println();
			UserDao userdao = UserDaoFactory.getInstance().getUserDao();
			if (!(incheck.equals(check))) {
				out.println(4);
			} else {
				int result = userdao.login(name,pass);
				if(result==2){
					req.getSession().setAttribute("uname", name);
				}
				out.println(result);
			}
		} catch (Exception e) {
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}
}
