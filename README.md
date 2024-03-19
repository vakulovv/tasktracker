# Task Tracker

Демо: [netlify](https://65f8b68a735a9422f7a90d8b--incomparable-fox-9a47b5.netlify.app/)

Используется monorepo на основе `lerna`, сборка `Vite`.

### Запустить в режиме разработки:
1. Выполнить команду `yarn bootstrap`
2. Выполнить команду `yarn dev --scope=client`

### Запустить в режиме разработки + SSR:
1. Выполнить команду `yarn bootstrap`
2. Выполнить команду `yarn dev --scope=server`

Запустить через Docker:
1. Выполнить команду  `docker-compose up server`
