# Stage 1: Build the Angular app
FROM node:21-alpine AS builder
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build
# Stage 2: Serve app with nginx server
FROM nginx:alpine
# Copy the build output to replace the default nginx contents.
COPY --from=builder /usr/local/app/dist/heimdalls-vista/browser /usr/share/nginx/html
# Expose port 80
EXPOSE 80
