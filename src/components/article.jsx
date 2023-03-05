import '../styles/article.css';

function Article ({name_product, img, price, alt ,id, comprar}) {
    return(
        <div className='container' id={id}>
            <img src={require(`../Images/${img}.jpg`)} alt={alt} />
            <p className='nombre_producto'>{name_product}</p>
            <div className='tallas'>
                <p className="talla">XL</p>
                <p className="talla">L</p>
                <p className="talla">M</p>
                <p className="talla">S</p>
                <p className="talla">XS</p>
            </div>
            <input type="submit" value={price} className='precio' onClick={()=>comprar(id)} />
        </div>
    )
}

export default Article;