# certbot

## certbot docker run
```
sudo docker run -it --rm --name certbot \
-v "/home/apps/dockers/certbot/letsencrypt:/etc/letsencrypt" \
-v "/home/apps/dockers/certbot/lib/letsencrypt:/var/lib/letsencrypt" \
-v "/home/apps/dockers/certbot/log:/var/log/letsencrypt" \
-v "/home/apps/webs/pages:/tmp" \
-p "64120:80" \
-p "64121:443" \
certbot/certbot certonly --webroot

CNAME
_EBC5C22BAAB7754D4459D6A8EC5C6E0D.fintechlife.net. => EA4100026EF95773EDDA8E201B682155.C7457AEEF389274B42804E8685923D24.6ecaeca55fa040e.comodoca.com

```

## /home/apps
```
path:
/home/apps
  mysql/db
  mysql/conf.d

  node

  webs/pages

  dockers/nginx/nginx.conf
  dockers/nginx/conf.d

  dockers/certbot/letsencrypt
  dockers/certbot/lib/letsencrypt

  projects
    wordpress
      samwp
      maya/maya1
      maya/maya2
      maya/maya3
      maya/maya4
      maya/maya5
    viber
```

## docker-compose command
```
sudo docker-compose up -d
sudo docker-compose down
sudo docker-compose rm -svf certbot
sudo docker-compose up -d --build certbot

clear docker logs
sudo sh -c 'truncate -s 0 /var/lib/docker/containers/*/*-json.log'
sudo rm $(docker inspect $1 | grep -G '"LogPath": "*"' | sed -e 's/.*"LogPath": "//g' | sed -e '
s/",//g');
```