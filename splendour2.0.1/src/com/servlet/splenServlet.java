package com.servlet;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Logger;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;

import org.apache.catalina.websocket.MessageInbound;
import org.apache.catalina.websocket.StreamInbound;
import org.apache.catalina.websocket.WebSocketServlet;
import org.apache.catalina.websocket.WsOutbound;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = "/splendour.ws")
// 处理WebSocket的Servlet需要继承自WebSocketServlet
public class splenServlet extends WebSocketServlet {
	private int userId = 0;
	// Log
	private Logger logger = Logger.getLogger(splenServlet.class.getName());

	private Map<String, MessageInbound> map = new HashMap<String, MessageInbound>();

	@Override
	protected StreamInbound createWebSocketInbound(String subProtocol,
			HttpServletRequest request) {
		// Log
		logger.info("request ws servlet");

		// 返回一个StreamInbound实例
		return new MessageInbound() {
			// WebSocket关闭事件
			@SuppressWarnings("unchecked")
			@Override
			protected void onClose(int status) {
				super.onClose(status);
				// Log
				logger.info("Web Socket Closed: " + status);
				int presentId = userId;
				if (map.get(presentId + "") == this) {
					if (presentId % 2 != 0) {
						userId--;
					}
					map.remove(presentId + "");
					logger.info("adsfdsfsdf");
					if (map.get(presentId + "") == null) {
						logger.info("5201314");
					}
				} else {
					Iterator iterator = map.keySet().iterator();
					while (iterator.hasNext()) {
						Object key = iterator.next();
						if (map.get(key) == this) {
							map.remove(key);
							break;
						}
					}
				}
			}

			// WebSocket握手完成，创建完毕，WsOutbound用于向客户端发送数据
			@Override
			protected void onOpen(WsOutbound outbound) {
				super.onOpen(outbound);
				// Log
				logger.info("Web Opened!" + (userId + 1));

				if (userId == 100000000) {
					userId = 0;
				}
				userId++;
				map.put(userId + "", this);

				try {
					CharBuffer buffer = CharBuffer.wrap("id/" + userId);
					getWsOutbound().writeTextMessage(buffer);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

				if (userId % 2 == 0) {
					int pathId1 = (int) (Math.random() * 8 + 1);
					int pathId2 = (int) (Math.random() * 8 + 1);
					int pathId3 = (int) (Math.random() * 8 + 1);
					int pathId4 = (int) (Math.random() * 8 + 1);
					int pathId5 = (int) (Math.random() * 8 + 1);
					int pathId6 = (int) (Math.random() * 8 + 1);
					int pathId7 = (int) (Math.random() * 8 + 1);
					int pathId8 = (int) (Math.random() * 8 + 1);
					int pathId9 = 9;
					int pathId10 = 10;
					broadcast("start/" + pathId1 + "/" + pathId2 + "/"
							+ pathId3 + "/" + pathId4 + "/" + pathId5 + "/"
							+ pathId6 + "/" + pathId7 + "/" + pathId8 + "/"
							+ pathId9 + "/" + pathId10, userId - 1, userId);
				}
			}

			// 有二进制消息数据到达
			@Override
			protected void onBinaryMessage(ByteBuffer buffer)
					throws IOException {
				// Log
				logger.info("Binary Message Receive: " + buffer.remaining());
				// Nothing
			}

			// 有文本消息数据到达
			@Override
			protected void onTextMessage(CharBuffer buffer) throws IOException {
				// Log
				logger.info("Text Message Receive: " + buffer.remaining());
				String info = buffer.toString();
				String str[] = info.split("/");
				int id = Integer.parseInt(str[0]);
				if (str[1].equals("remove")) {
					if (id % 2 == 0) {
						map.remove((id - 1) + "");
					} else {
						map.remove((id + 1) + "");
					}
				} else {
					if (id % 2 == 0) {
						broadcast(info, id - 1, id);
					} else {
						broadcast(info, id, id + 1);
					}
				}
			}

			// 向指定的在线的两个用户发送消息
			private void broadcast(String str, int id1, int id2) {
				try {
					if (map.get(id1 + "") != null && map.get(id2 + "") != null) {
						CharBuffer buffer1 = CharBuffer.wrap(str);
						map.get(id1 + "").getWsOutbound().writeTextMessage(
								buffer1);
						CharBuffer buffer2 = CharBuffer.wrap(str);
						map.get(id2 + "").getWsOutbound().writeTextMessage(
								buffer2);
					} else if (map.get(id2 + "") == null
							&& map.get(id1 + "") != null) {
						CharBuffer buffer1 = CharBuffer.wrap(str);
						map.get(id1 + "").getWsOutbound().writeTextMessage(
								buffer1);
						/*
						 * logger.info("T213242354353654765765"); CharBuffer
						 * buffer1 = CharBuffer.wrap("stop"); map.get(id1 +
						 * "").getWsOutbound().writeTextMessage(buffer1);
						 */
					} else if (map.get(id2 + "") != null
							&& map.get(id1 + "") == null) {
						/*
						 * CharBuffer buffer2 = CharBuffer.wrap("stop");
						 * map.get(id2 +
						 * "").getWsOutbound().writeTextMessage(buffer2);
						 */
						CharBuffer buffer2 = CharBuffer.wrap(str);
						map.get(id2 + "").getWsOutbound().writeTextMessage(
								buffer2);
					}
				} catch (IOException ignore) {
				}
			}
		};
	}
}