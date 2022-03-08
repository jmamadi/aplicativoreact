import Item from '../Item/Item';

const ItemList = ({ products = []}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '10px',

            }}
        >
            {products.map(product => <Item key={product.id} product={product}/>)}
        </div>
    );
};

export default ItemList;
