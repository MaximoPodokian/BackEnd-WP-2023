import { promises as fs } from 'fs'

const addProduct = async (product) => {
    
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    
    if (products.find(producto => producto.id == product.id)) {
        return "Producto ya agregado"
    }
    
    products.push(product)
   
    await fs.writeFile('./productos.txt', JSON.stringify(products))
}

const getProducts = async () => {
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    console.log(products)
}

const getProductById = async (id) => {
    
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    const prod = products.find(producto => producto.id === id)
    if (prod) {
        console.log(prod)
    } else {
        console.log("Producto no existe")
    }
}

const updateProduct = async (id, { nombre }) => {
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    const indice = products.findIndex(prod => prod.id === id)

    if (indice != -1) {
        
        products[indice].nombre = nombre
        
        await fs.writeFile('./productos.txt', JSON.stringify(products))
    } else {
        console.log("Producto no encontrado")
    }
}

const deleteProduct = async (id) => {
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    const prods = products.filter(prod => prod.id != id)
    await fs.writeFile('./productos.txt', JSON.stringify(prods))
}

const product = { nombre: "Vino", id: 1 }

//addProduct(product)
//getProducts(getProductById(3)
//updateProduct(4, { nombre: "Vino" })
//deleteProduct(3)