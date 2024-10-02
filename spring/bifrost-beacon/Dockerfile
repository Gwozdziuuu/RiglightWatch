FROM openjdk:21-jdk

USER root
COPY target/bifrost-beacon-*.jar /app/service.jar
ENTRYPOINT ["java", "-jar", "/app/service.jar"]