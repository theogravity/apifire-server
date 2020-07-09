FROM node:12

# Create app directory
WORKDIR /app

RUN apt-get update && apt-get install -y \
  vim \
  curl && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 3000
EXPOSE 9229

CMD ["tail", "-f", "/dev/null"]
