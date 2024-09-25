FROM ubuntu:22.04
 
RUN apt update -y
RUN apt upgrade -y
RUN apt-get install build-essential -y
RUN apt install curl -y

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
#Node version manager
RUN apt install nodejs -y


RUN apt-get install -y dotnet-sdk-8.0 -y

RUN apt install -y mc

RUN npm install -g vite
RUN npm install -g vitest
RUN npm install -g jsdom

EXPOSE 5173