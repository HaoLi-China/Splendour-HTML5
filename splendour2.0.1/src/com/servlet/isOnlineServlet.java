package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class isOnlineServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			resp.setContentType("text/html;charset=utf-8");
			PrintWriter out = resp.getWriter();
			String name = req.getParameter("name");
			name = URLDecoder.decode(name, "UTF-8");
			String loginuser = (String) req.getSession().getAttribute("uname");
			System.out.println("name=" + name);
			System.out.println("loginuser=" + loginuser);
			
			if (!name.equals(loginuser)) {
				//resp.sendRedirect("loginView.html");
				out.println(0);
			}else{
				out.println(1);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
	}

	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}
}
