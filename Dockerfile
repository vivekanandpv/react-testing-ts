FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY build /usr/share/nginx/html

# npm run build
# docker image build -t react-app .
# docker container run -d -p 9001:80 react-app
# the application is now running in localhost:9001