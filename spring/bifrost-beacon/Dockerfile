FROM gwozdziuuu/openjdk-21-ubi9-runtime:latest

USER root
COPY service.jar app.jar

RUN rpm -e --nodeps $(rpm -qa '*rpm*' '*dnf*' '*libsolv*' '*hawkey*' 'yum*') && \
 rm -f /tmp/tls-ca-bundle.pem && \
 chown -R 0 /home/default && chmod -R g=u /home/default

EXPOSE 8080

USER 185
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/home/default/app.jar"]