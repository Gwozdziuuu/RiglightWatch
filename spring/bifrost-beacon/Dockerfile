FROM openjdk:21-jdk

USER root
COPY service.jar /app/service.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/service.jar"]