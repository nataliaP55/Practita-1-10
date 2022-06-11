/* cuando el cliente seleccione un pedido, debería mostrarse en la página
si el cliente selecciona otro pedido, este reemplaza al anterior 

*/

const ORDEN_SPAGUETTI = 1; 
const ORDEN_RAVIOLES = 2; 
const ORDEN_LASAGNA = 3; 
const ORDEN_CANELONES = 4; 

const IMG_SPAGUETTI = "./spaghetti.jpg"
const IMG_RAVIOLES = "https://us.123rf.com/450wm/foodandmore/foodandmore1707/foodandmore170700036/82316710-plato-de-pasta-italiana-tradicional-sabrosa-del-ravioli-servida-en-una-salsa-picante-picante-adornad.jpg"
const IMG_LASAGNA = "https://us.123rf.com/450wm/tolsteneva/tolsteneva1710/tolsteneva171000013/87788397-un-pedazo-de-lasa%C3%B1a-en-un-plato-blanco-grande.jpg"
const IMG_CANELONES = "https://w7.pngwing.com/pngs/514/336/png-transparent-vegetarian-cuisine-pasta-pizza-cannelloni-durum-pizza-food-recipe-tomato-thumbnail.png"

/*
Recibe el id del botón usado para la orden y dependiendo del id,
muestra el pedido correspondiente
*/

function mandarOrden(id){

    switch(Number(id)){
        case ORDEN_SPAGUETTI:
            document.querySelector('#ordenSolicitada').innerHTML =`
                <h2> Orden de Spaguetti </h2>
                <img width="400px" src=${IMG_SPAGUETTI} alt="imagen de spaguetti" title="opcion spaguetti">
            `;
            break;
        case ORDEN_RAVIOLES:
            document.querySelector('#ordenSolicitada').innerHTML =`
                <h2> Orden de Ravioles </h2>
                <img width="400px" src=${IMG_RAVIOLES}>
                
            `;
            break;
        case ORDEN_LASAGNA:
            document.querySelector('#ordenSolicitada').innerHTML =`
                <h2> Orden de Lasagna </h2>
                <img width="400px" src=${IMG_LASAGNA}>
            `;
             break;
        case ORDEN_CANELONES:
            document.querySelector('#ordenSolicitada').innerHTML =`
                <h2> Orden de Canelones </h2>                
                <img width="400px" src=${IMG_CANELONES}>
            `;
             break;
        default:
            document.querySelector('#ordenSolicitada').innerHTML =`
            <h2> Orden no encontrada </h2>
            <h3> Seleccione una opción válida </h3>
            
            `;  
    }
}