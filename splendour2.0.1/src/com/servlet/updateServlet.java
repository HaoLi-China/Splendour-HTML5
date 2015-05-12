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
public class updateServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		try {
			resp.setContentType("text/html;charset=utf-8");
			PrintWriter out = resp.getWriter();
			String form = req.getParameter("form");
			String article = req.getParameter("article");
			String varia = req.getParameter("varia");
			String username = req.getParameter("username");
			username = URLDecoder.decode(username, "UTF-8");
			String btname = req.getParameter("btname");
			
			System.out.println(form);
			System.out.println(article);
			System.out.println(varia);
			System.out.println(username);
			System.out.println(btname);
			
			UserDao userdao = UserDaoFactory.getInstance().getUserDao();
			int result=0;
			if(form.equals("user")){
				result=userdao.updateUser(form, article, varia, username);
			}else if(form.equals("butterfly")){
				result=userdao.updateBtf(form, article, varia, username, btname);
			}else if(form.equals("tool")){
				result=userdao.updateTool(form, article, varia, username, btname);
				System.out.println(result);
			}else {
				result=0;
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
