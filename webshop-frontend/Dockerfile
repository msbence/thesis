FROM node:latest as build
WORKDIR /usr/src/app
COPY package* .
COPY src/ src/
COPY public/ public/
RUN ["npm", "install"]
RUN ["npm", "run-script", "build"]

FROM node:latest as runner
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package* ./
COPY --from=build /usr/src/app/src/ src/
COPY --from=build /usr/src/app/public/ public/
COPY --from=build /usr/src/app/node_modules/ node_modules/
COPY --from=build /usr/src/app/build build/
RUN ["npm", "install", "-g", "serve"]
EXPOSE 5000
ENTRYPOINT ["serve", "-s", "build"]
