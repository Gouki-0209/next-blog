FROM node:latest
WORKDIR /usr/src/app

ADD packages.txt /
RUN chmod +x /packages.txt

ADD entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]