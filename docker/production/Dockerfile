ARG NODE=node:16-alpine 




FROM ${NODE} AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /future
ENV NEXT_TELEMETRY_DISABLED 1
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn add sharp && yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install sharp && npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM ${NODE} AS builder
WORKDIR /future
COPY --from=dependencies /future/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
# COPY .env.production .env.production
RUN yarn build


FROM mhart/alpine-node:slim-16 AS runner
WORKDIR /future
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
COPY --from=builder /future/public ./public
COPY --from=builder /future/.next/standalone ./
COPY --from=builder /future/.next/static ./.next/static


# USER nextjs
EXPOSE 3000
CMD ["node" , "server.js"]
