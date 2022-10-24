# Curso React - Ecommerce Demo


####  Nicolas Mosquera


## Sobre el proyecto
#### Proyecto que forma parte de la entrega final del curso realizado con React para la plataforma CoderHouse

Se trata de un ecommerce básico donde se fueron desarrollando y 
aplicando los conocimientos adquiridos en el curso, que a su vez formaron parte de los desafios y entregables semanales.

## Empezando

* Clonar el proyecto
```
$ git clone https://github.com/DjCristian95/ecommerce-react.git
```
* Instala las dependencias:
```
$ yarn
or
$ npm install
```
* Ejecutar el proyecto
```
$ npm run dev
# or to build
$ npm run build

```
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



---
## Componentes
* ContactForm
```
ContactForm.jsx
```
* Item
```
ItemComponente.jsx
ItemCountComponent.jsx
ItemDetailComponent.jsx
ItemListComponente.jsx
```
* Navbar
```
CartWidgetComponent.jsx
NavbarComponent.jsx
```

## Contenedores
```
ItemDetailConteiner.jsx
ItemListConteiner.jsx
```
## Contextos
```
cartContext.jsx
```
---
## Cómo funciona

#### Levanta los datos de una base de datos que se encuentra en Firebase, con esa información va llenando las cards dinámicamente y al hacer el proceso de selección de un producto, se pueden ver los detalles del mismo o agregar al carrito. Las cards cuentan con validaciones de cantidad que se pueden agregar segun su cantidad de stock disponible.
#### Una vez en el carrito, tenemos información del item seleccionado, nos permite borrarlo del carrito, vaciar el carrito o finalizar la compra.
#### Al finalizar la compra se nos despliega un formulario, en el cual completamos los datos personales y  confirmar la misma.
#### Cuando se finaliza la compra se genera un nuevo registro en la base de datos de Firebase con la información relacionada

````
### Restan implementar las vistas de nosotros,Ofertas y Contacto.
