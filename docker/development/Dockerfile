FROM node:16.19-alpine


WORKDIR /future

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi


COPY . .
# This will do the trick, use the corresponding env file for each environment.


EXPOSE 3001

CMD [ "yarn", "dev" ]



