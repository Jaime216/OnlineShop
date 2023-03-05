import '../styles/article.css';

function Article ({name_product}) {
    return(
        <div className='container'>
            <img src={require('../Images/165319177802d544dad2fc70cb52e501b847441cfb_thumbnail_600x.webp')} alt="Pantalones" />
            <p className='nombre_producto'>{name_product}</p>
            <div className='tallas'>
                <p className="talla">XL</p>
                <p className="talla">L</p>
                <p className="talla">M</p>
                <p className="talla">S</p>
                <p className="talla">XS</p>
            </div>
            <input type="submit" value='33.99$' className='precio' />
        </div>
    )
}

export default Article;