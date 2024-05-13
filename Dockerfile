FROM node:18.18.2
COPY . /vue
WORKDIR /vue
## TimeZone 설정
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install
CMD ["npm", "run","dev"]
