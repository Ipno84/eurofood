# eurofood
Eurofood app

## API

https://www.eurofoodservice.it/api/
Authorization: Basic UktHTlpSMllTUDZKTkM1NjU5NkQyRkk5NEpGTlhZMkM6 
(su Postman username RKGNZR2YSP6JNC56596D2FI94JFNXY2C)

• lista delle Sezioni (homepage)
◦ /api/categories?sort=[name_ASC]&display=full&filter[id_parent]=[2]&filter[active]=[1]
•  lista dei prodotti per categoria
◦ /api/categories/75 – oggetto associations.products[]
• dettagli dei prodotti per id    
◦ /api/products?display=full&filter[id]=[1702|1039|...]
•  lista delle giacenze per id prodotti
◦ /api/stock_availables?display=full&filter[id]=[1702|1039|...]
•  lista della scontistica per id prodotti
◦ /api/specific_prices?display=full&filter[id_product]=[1702|1039|...]  