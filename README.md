# Nextjs+React+go

## Install dependencies

### nodejs :

-   > sudo apt-get install curl software-properties-common

-   > curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -

-   > sudo apt-get install build-essential nodejs

### pm2 (https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/) :

-   > sudo npm i -g pm2

### get go

1.  > curl -O https://storage.googleapis.com/golang/go1.16.2.linux-amd64.tar.gz

2.  > sudo tar -C /usr/local -xzf go1.15.4.linux-amd64.tar.gz

3.  add the exec command to _~/.profile_

-   > vim ~/.profile

4. add the following line

```sh
export GOPATH=$HOME/work
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
```

5. refresh the profile

-   > source ~/.profile

# Node

> npm install

## Prod

-   Build

    > npm run build

-   Launch
    > pm2 start npm --name "my_app_name" -- start

## Develop

-   > cp config.dist.js next.config.js

-   > npm run dev

# API

-   Go to Api

-   > cd ./Api

## Test

### - test de tous les modules

-   > go test -v ./...

### - test du main package

-   > go test -v .

### - test d'un package'

-   > go test -v ./path/to/package

### - clean cache

-   > go clean -testcache

## Develop

1. run the API

-   > go run main.go

## Production

1. Build the executable

-   > go build main.go

1. execute the build file

-   > ./main
