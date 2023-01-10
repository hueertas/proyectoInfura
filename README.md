# TFG- DESARROLLO DE UN SERVICIO PARA LA GESTIÓN DE RESERVAS DE PUESTOS DE LABORATORIO BASADO EN BLOCKCHAIN EN LA ETSIT
## Descripción del proyecto
 Aplicación descentralizada basada en gestión de reservas de laboratorios de los diferentes departamentos en la escuela técnica superior de ingenieros de Telecomunicaciones de Madrid (UPM). Esta dApp está enfocada a la época pandémica del Covid-19 cuyo objetivo es poder evitar los bloqueos de acceso a los laboratorios en época pandémica y garantizar la seguridad e integridad de los datos almacenados de todos los tipos de usuarios.
## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: Reservar puestos de trabajo del laboratorio.
- `Funcionalidad 2`: Consulta de datos. ( datos personales, propias reservas, laboratorios con sus asignaturas correspondientes etc)
- `Funcionalidad 2`: Sistema de roles según el usuario registrado en la plataforma.
- `Funcionalidad 3`: Registro y administración de los puestos de los laboratorios de la escuela.

## Herramientas y lenguajes

* React
* HTML
* CSS
* JS
* Solidity
* Redux
* Web3
* Drizzle
* Truffle
* Infura
* Goerli
* Metamask
* Ethereum
* Node
* NPM
* Git
* Yarn

## Desarrolladora

Paula Huertas Sánchez - Cabezudo 

## Manual de instalación 

1. Clonar el repositorio:
- ```git clone https://github.com/hueertas/proyectoInfura.git```
2. Acceder a la carpeta e instalar las dependencias:
- `npm install`
- `cd dapp`
- `npm install`
 ## Puesta en marcha en red de prueba goerli
1. Crear proyecto infura 
2. Configurar fichero truffle-config.js para conectarse con goerli. La frase nmemonic se obtiene de la frase secreta 
de recuperación de cuenta que ofrece metamask. InfuraProjectID se obtiene de la API KEY de infura.
1. Compilar en la carpeta truffle:
- `cd truffle`
- `npx truffle compile`
3. Migrar los contratos en la carpeta truffle:
- `npx truffle migrate --reset --network goerli `
5. Copiar los archivos JSON de la carpeta build del directorio truffle al directorio contracts de la carpeta dapp.
6. Ir a la carpeta dapp e iniciar la dApp:
- `cd dapp`
- `npm start`

7. Meter la frase de recuperación de metamask en la constante mnemonic y el API KEY de infura  en el fichero truffle-config.js.
8. Abrir la extensión de MetaMask en el navegador y conectarse a la red de prueba Goerli.


