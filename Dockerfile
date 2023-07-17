# 使用Nginx部署静态网站
FROM nginx:alpine

# 暴露80端口，用于HTTP流量
EXPOSE 80

# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]