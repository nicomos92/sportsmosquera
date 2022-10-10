import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import {useContext} from 'react'
import ItemCountComponent from './ItemCountComponent'
import {CartContext} from '../context/cartContext'

const ItemDetailComponent = ({ item }) => {

    const { addItem } = useContext(CartContext);

    const handlerAddItem = (quantity) => {
        const add_item = {title: item.title, id: item.id, quantity, price: item.price};
        addItem(add_item);
    }

    return (
        <Container>
            <div className="bg-dark text-white shadow-lg rounded-3 px-4 py-3 mb-5">
                <div className="px-lg-3">
                    <div className="row">
                        <div className="col-lg-7 pe-lg-0 pt-lg-4">
                            <div className="product-gallery">
                                <div className="product-gallery-preview order-sm-2">
                                    <figure className="ui-pdp-gallery__figure">
                                        <Image data-zoom={item.thumbnail} data-index="0" width="410" height="500" decoding="async" src={item.thumbnail} className="ui-pdp-image ui-pdp-gallery__figure__image" alt="" />
                                    </figure>
                                </div>
                                <div className="product-gallery-thumblist order-sm-1">
                                    <a href="#first"><Image src={item.thumbnail} alt="" /></a>
                                    <a href="#second"><Image src={item.thumbnail} alt="" /></a>
                                    <a href="#third"><Image src={item.thumbnail} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 pt-4 pt-lg-0">
                            <div className="product-details ms-auto pb-3">
                                <div className="d-inline-flex p-2">
                                    <span> <h1> {item.description} </h1> </span>
                                </div>
                                <div className="mb-3">
                                    <span className="h3 fw-normal text-accent me-1">$ {item.price}</span>
                                </div>
                                <div className="mb-grid-gutter">
                                    <ItemCountComponent stock={item.stock} initial={1} handlerAddItem={handlerAddItem}/>
                                </div>
                                <div className="accordion mb-4" id="productPanels">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header"><a className="accordion-button" href="#productInfo" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="productInfo"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Información del Producto</a></h3>
                                        <div className="accordion-collapse collapse show" id="productInfo" data-bs-parent="#productPanels">
                                            <div className="accordion-body">
                                                <h6 className="fs-sm mb-2">{item.description}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ItemDetailComponent;