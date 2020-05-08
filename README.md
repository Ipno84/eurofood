# eurofood

Eurofood app

## API

https://www.eurofoodservice.it/api/
Authorization: Basic UktHTlpSMllTUDZKTkM1NjU5NkQyRkk5NEpGTlhZMkM6 // per endpoint pubblici
Authorization: Basic Q7NI79UCBIUD3Y626LAP3YM92QKTR5UR // sará quella finale
(su Postman username RKGNZR2YSP6JNC56596D2FI94JFNXY2C)

• lista delle Sezioni (homepage)
◦ /api/categories?sort=[name_ASC]&display=full&filter[id_parent]=[2]&filter[active]=[1]
• lista dei prodotti per categoria
◦ /api/categories/75 – oggetto associations.products[]
• dettagli dei prodotti per id  
◦ /api/products?display=full&filter[id]=[1702|1039|...]
• lista delle giacenze per id prodotti
◦ /api/stock_availables?display=full&filter[id]=[1702|1039|...]
• lista della scontistica per id prodotti
◦ /api/specific_prices?display=full&filter[id_product]=[1702|1039|...]

# Product fields [if not full]

-   id
-   name
-   id_category_default
-   quantity
-   type
-   unit_price_ratio
-   reference
-   price
-   wholesale_price
-   description
-   description_short
-   active
-   id_default_image

# Category fields

-   id
-   id_parent
-   name
-   description
-   active

# Drawer links

-   Home
-   Super Offerte
-   Offerte
-   Scegli per categoria
-   I miei ordini
-   Il mio profilo
-   Impostazioni
-   Logout

# Hardcoded sections ID

-   Offers [51]
-   Super Offers [86]

## ME

-   id: 1155

# CALLS

## Addresses

### Creazione dell'indirizzo

-   POST /api/addresses

### Modifica di un indirizzo

-   PUT /api/addresses/{id_address}

### Lista indirizzi del singolo utente

-   GET /api/addresses?display=full&filter[deleted]=[0]&filter[id_customer]=[1155]

## Carts

### Creazione carrello

-   POST /api/carts

### Modifica carrello

-   PUT /api/carts/1185

### Note

-   N.B per il carrello non uso metodo GET perchè lo creo on the fly e lo mantengo in cache lato client, POST e PUT tornano l'oggetto cart, il che rende inutile una GET

## Categories

### Per ottenere le categorie mancanti dalla cache lato client

-   GET /api/categories?display=full&filter[active]=[1]&filter[id]=[1|2|3...]

### Per ottenere le categorie principali

-   GET /api/categories?sort=[name_ASC]&display=full&filter[active]=[1]&filter[id_parent]=[2]

## Customers

### Creazione utente

-   POST /api/customers

### Modifica utente

-   PUT /api/customers/1155

### Login utente

-   POST /api/customers
-   La chiamata è ancora da implementare lato client, al momento utilizzo una get generica che deprecherò asap

## Orders

### Creazione Ordine

-   POST /api/orders
-   La chiamata sará implementata a momenti

### Per ottenere la lista degli ordinativi dell'utente

-   GET /api/orders?display=full&filter[id_customer]=[1155]

## Specific Prices

### Per ottenere i prezzi dei prodotti

-   GET /api/specific_prices?display=[id,id_product,reduction,reduction_type]&filter[id_product]=[1|2|3...]

## Products

### Per ottenere i prodotti

-   GET /api/products?display=[id,name,id_category_default,link_rewrite,id_default_image,quantity,type,unit_price_ratio,reference,price,wholesale_price,description,description_short,active]&filter[id]=[1|2|3...]

### Per cercare prodotti sulla base del loro nome e/o categoria

-   GET /api/products?sort=[name_ASC]&display=[id,name,link_rewrite,id_category_default,id_default_image,quantity,type,unit_price_ratio,reference,price,wholesale_price,description,description_short,active]&filter[name]=[Nomeprodot...]%&filter[id_category_default]=[456]

## Stock Availables

### Per ottenere lo stock di magazzino dei prodotti

-   GET /api/stock_availables?display=[id,id_product,quantity]&filter[id]=[1|2|3...]

### TODO:

-   [-] preview dell'ordine

*   Ho sostituito la normale descrizione con la short description. Anche in questo caso arriva html, ma non ha una formattazione complessa. Quindi, rimuoverla non compromette esteticamente la descrizione stessa. Non appena svilupperemo il sistema per il replacing dei tag html con componenti react faremo il revert di questa funzione

https://medium.com/better-programming/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c

## VPN

FortiClient
michele.nigri
TxE7jo\_;m

Edit &etc&host
192.168.10.233 svil-upgrade.eurofoodservice.it

## Notification

lucrezia.perrone@eurofoodservice.it
Eurofood_2019
