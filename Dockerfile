FROM docker2.gf.com.cn/library/nginx:v1.20.1-alpine

# copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# copy code to container
# if you want to mount 'dist' path from host into container, remove this line
COPY dist /etc/nginx/html

# copy start script
# COPY docker.start.sh /start.sh
# RUN chmod u+x /start.sh

# ENTRYPOINT ["/start.sh"]
