
const products = [
    { id: 1, name: 'Cafe Colombiano', price: 2000, category: 'cafe', stock: 15, img: './../images/bandera_1.png', description: 'Se caracteriza por tener mucho cuerpo, notas de dulce, nuez y chocolate, hasta florales y frutales, casi tropical'},
    { id: 2, name: 'Cafe Brasilero', price: 2500, category: 'cafe', stock: 20, img: './../images/bandera_2.png', description: 'Excelente café, de aroma suave, cuerpo ligero y sabor dulce'},
    { id: 3, name: 'Cafe Costaricence', price: 2700, category: 'cafe', stock: 15, img: './../images/bandera_3.png', description: 'De las variedades Caturra , que produce un grano de mayor calidad y con mejores características aromáticas'},
    { id: 4, name: 'Cafe Indú', price: 3000, category: 'cafe', stock: 8, img: './../images/bandera_4.png', description: 'Su taza es intensamente aromática, de sabor suave y con notas de chocolate'},
    { id: 5, name: 'Taza Personalizada', price: 2800, category: 'tazas', stock: 12, img: './../images/tazapersonalizada_1.png', description: 'Producto de porcelana, con una película templada totalmente personalizable'},
    { id: 6, name: 'Desayuno Premium', price: 3000, category: 'desayunos', stock: 13, img: './../images/desayuno.png', description: 'En ese día tan especial, regalale la mejor sorpresa a es ser que tanto queres'},
];

const categories = [
    {id: 'cafe', description: 'Cafe'},
    {id: 'tazas', description: 'Tazas'},
    {id: 'desayunos', description: 'Desayunos'}
]


export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        const productsToResolve = categoryId ? products.filter(item => item.category === categoryId) : products
        console.log(categoryId)
        setTimeout(() => {
            resolve(productsToResolve);
        }, 1000);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}

