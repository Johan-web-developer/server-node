const {log} = require('console');
const http = require('http');


const app = http.createServer((req, res)=>{
    const url = req.url
/*     process.exit();
 */

if(url == '/'){
        res.write('<html>')
        res.write('<body><form action="/home"><input type="text" name="home" method="post"><button type="submit">Send</form></body>');
        res.write('</html>')
        return res.end();
}else if(url == '/users'){
        res.write('<html>')
        res.write('<body><ul><li>Usuario 1</li><li>Usuario 2</li><li>Usuario 3</li><li>Usuario 4</li></ul></body>');res.write('</html>')
         return res.end(); 
}else if(url == '/categories'){
    res.write('<html>')
    res.write('<body><table action="/categories"><thead><tr><th>Categoria</th><th>Descripcion</th></tr></thead><tbody><tr><td>Electronica</td><td>Productos electronicos como telefonos, computadoras, televisores, camaras, etc.</td></tr><tr><td>Ropa y Accesorios</td><td>Prendas de vestir, calzado, joyería, bolsos, etc.</td></tr><tr><td>Hogar y Decoracion</td><td>Muebles, electrodomesticos, artículos de decoracion, utensilios de cocina, e tc.</td></tr></tbody></table>')
    res.write('</html>') 
    return res.end();
}else if(url == '/products'){
    res.write('<html>')
    res.write('<body><table action="/users"><thead><tr><th>Producto</th><th>Cantidad</th><th>Precio Unitario</th><th>Total</th></tr></thead><tbody> <tr><td>Producto 1</td><td>10</td><td>$10.00</td><td>$100.00</td></tr><tr><td>Producto 2</td><td>5</td><td>$15.00</td><td>$75.00</td></tr></tbody><tfoot><tr><td colspan="3">Total General</td><td>$175.00</td></tr></tfoot></table></body>')
    return res.end();
}else if(url === '/employees'){
    res.write('<html>')
}


res.setHeader('Content-Type', 'text/html');
res.write('</html>')
res.end();
});

app.listen(7000);