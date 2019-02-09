FROM node:8
LABEL maintainer="David Sn <divad.nnamtdeis@gmail.com>"

# Those ain't public
ARG KEY
ARG SECRET

# We run docker in production only!
ENV NODE_ENV production

# Push notifications
ENV APP_ID "700534"
ENV KEY ${KEY}
ENV SECRET ${SECRET}

# Expose HTTP port
ENV PORT 3000
EXPOSE 3000/tcp

# Install dependencies and copy files
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Run the app!
CMD ["npm", "run", "start"]
