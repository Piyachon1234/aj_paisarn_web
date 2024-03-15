FROM nginx:alpine3.18 as production-stage
COPY ./build/ /usr/share/nginx/html
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf