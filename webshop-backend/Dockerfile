FROM maven:latest as build
WORKDIR /usr/src/mymaven
COPY pom.xml ./
COPY src/ src/
RUN ["mvn", "package"]

FROM openjdk:11 as runner
WORKDIR /usr/src/webshop
COPY --from=build /usr/src/mymaven/target/*.jar ./webshop.jar
EXPOSE 8081
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","webshop.jar"]
