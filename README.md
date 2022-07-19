# webPages
web pages

# install
npm init vue@latest
cd clients
npm install
npm run dev
npm run build
(vite革了webpack的命)

(系統管理員)
npm install -g @vue/cli
vue --version

https://www.freesion.com/article/4327593184/
vue create project-pwa
cd project-pwa
npm run serve

https://www.footmark.com.tw/news/programming-language/vuejs/vue-cli3-seting/
vue ui --host localhost

[github page]
root: repo/docs

## wordpress config
wp-config-docker.php

# command
## docker
sudo docker-compose down
sudo docker-compose up -d
sudo docker run certbot/certbot certificates

## ssh
ssh -p 65022 tzuss@fintechlife.net # arena
ssh -p 65023 tzuss@fintechlife.net # whitefang

# nginx
Nginx代理proxy pass配置去除前缀
https://www.cnblogs.com/woshimrf/p/nginx-proxy-rewrite-url.html

## restart nginx
echo "0926721122" | sudo -S docker exec nginx nginx -s reload

## wordpress url
http://fintechlife.net:64104/samwp/

# certbot
https://andyyou.github.io/2019/04/13/how-to-use-certbot/

## manual (certbot dns)
sudo docker run -ti --rm --name certbot \
-v "/home/apps/dockers/certbot/letsencrypt:/etc/letsencrypt" \
-v "/home/apps/dockers/certbot/lib/letsencrypt:/var/lib/letsencrypt" \
-v "/home/apps/dockers/certbot/log:/var/log/letsencrypt" \
-v "/home/apps/webs/pages:/tmp" \
-p "64120:80" \
-p "64121:443" \
certbot/certbot certonly --manual --config-dir /etc/letsencrypt --work-dir /var/lib/letsencrypt --logs-dir /var/log/letsencrypt --preferred-challenges dns -d "*.fintechlife.net" -d "fintechlife.net"

## certbot certificates
sudo docker run -ti --rm --name certbot \
-v "/home/apps/dockers/certbot/letsencrypt:/etc/letsencrypt" \
-v "/home/apps/dockers/certbot/lib/letsencrypt:/var/lib/letsencrypt" \
-v "/home/apps/dockers/certbot/log:/var/log/letsencrypt" \
-v "/home/apps/webs/pages:/tmp" \
-p "64120:80" \
-p "64121:443" \
certbot/certbot certificates

## cert expire / not expire during seconds
openssl x509 -enddate -noout -in /etc/letsencrypt/live/fintechlife.net/fullchain.pem -checkend 604800
result: Certificate will not expire
or: Certificate will expire
