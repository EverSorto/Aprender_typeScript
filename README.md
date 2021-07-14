#Variables de entorno
Hay que crear un archivo en la raíz del proyecto que se llame .env
luego tomar copiar el contenido que se encuentra en .env.example
y colocarlo dentro de .env luego completar las variables de entorno
por ejemplo

```bash
APP_PORT=3000
APP_MONGODB_URI=mongodb://localhost/todo-ever
```

# Instalar dependencias

```bash
yarn install
```

# Run server
```bash
yarn dev
```

y para producción
```bash
yarn start
```
