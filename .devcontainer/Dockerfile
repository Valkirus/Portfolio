FROM node:24-alpine

WORKDIR /workspace

# This is for caching. The volume mount will overlay this, but the named volume for node_modules will be populated from this on the first run.
# Install backend dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN apk add tmux
