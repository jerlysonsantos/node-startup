FROM nginx:1.23.3-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/assets/

EXPOSE 80

CMD nginx -g "daemon off;"