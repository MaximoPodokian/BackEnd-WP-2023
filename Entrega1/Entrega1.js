class ProductManager {
  constructor() {
    this.products=[]
  }

  getProducts=()=>{
    return this.products
  }
      

  incrementarId=()=>{
    const contador = this.products.length
    if (contador === 0) {
      return 1
    } else {
      return this.products[contador-1].id+1;
    }
  }

  addProducts = (title, description, price, thumbnail, code, stock)=>{
    const id = this.incrementarId()
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Debe Ingresar Todos los datos del producto");
      return
    } 

      const verificacodigo = this.products.find(
        elemento => elemento.code === code );
      if (verificacodigo) {
        console.log("Ya existe un producto con este codigo");
        return} else{
          this.products.push({
          id,
          title,
          description,
          price,
          thumbnail,
          code,
          stock
          });
        }
    }

    getProductsById=(id)=>{
      const productoexistente = this.getProducts().find(element => element.id === id)
      if (!productoexistente) {
        console.log("Not Fund");
        return;
      } else {
        return productoexistente;
      }
    }
  }
  

const agregarProductos = new ProductManager();
agregarProductos.addProducts("producto1", "Vino", 1500, "url", "001", 18);// se carga un producto en forma normal
agregarProductos.addProducts("producto2", "Whisky", "url", "002", 4);//no deja cargar el producto al menos que esten completos todos los campos
agregarProductos.addProducts("producto3", "Espumante", 4000, "url", "002", 36);//no permite repetir el codigo

console.log(agregarProductos.getProducts())

console.log(agregarProductos.getProductsById(25));// No encuentra el producto ya que no existe

console.log(agregarProductos.getProductsById(2));//encuentra el producto


