FROM nginx:latest


WORKDIR /app
COPY . .

COPY nginx.conf /etc/nginx/nginx.conf

# mkdir
RUN mkdir -p /etc/nginx/ssl

# ssl copy
COPY ./cert/Wildcard.eseoul.go.kr_pem.pem /etc/nginx/ssl/Wildcard.eseoul.go.kr_pem.pem
COPY ./cert/KeyFile_Wildcard.eseoul.go.kr_pem.key /etc/nginx/ssl/KeyFile_Wildcard.eseoul.go.kr_pem.key
COPY ./cert/password.txt /etc/nginx/ssl/password.txt

CMD ["nginx", "-g", "daemon off;"]
EXPOSE 443