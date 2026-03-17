FROM nginx:alpine

# Fix UTF-8 encoding
RUN apk add --no-cache bash

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy app
COPY . /usr/share/nginx/html/

# Add custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]