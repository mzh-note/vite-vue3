FROM docker2.gf.com.cn/library/nginx:v1.20.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY dist /etc/nginx/html
