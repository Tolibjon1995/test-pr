import React, { useState } from 'react'
import { faceData } from './FaceData'
import icon1 from '../../images/icon/icon-bundle.png'
import icon2 from '../../images/icon/icon-скидка.png'
import icon3 from '../../images/icon/icon-скидка (1).png'
import icon4 from '../../images/icon/icon-trade in.png'
import '../../styles/product.scss'
import Pagination from 'react-bootstrap/Pagination';
import Searchicon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

const Product = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(8);

    const paginate = (pageNumber) => setPage(pageNumber)
    let items = [];
    for (let number = 1; number <= Math.ceil(faceData.length / limit); number++) {

        items.push(
            <Pagination.Item
                onClick={() => { paginate(number) }}
                key={number}
                active={number === page}>
                {number}
            </Pagination.Item>,
        );
    }

    const indexOfLastOrder = page * limit;
    const indexOfFirstOrder = indexOfLastOrder - limit;
    const currentOrder = faceData.slice(indexOfFirstOrder, indexOfLastOrder);


    return (
        <div className='container-fluid'>
            <div className="row">
                <h1>Оформить заказ</h1>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Поиск по названию товара" />
                    <div className="input-group-append d-flex">
                        <span className="input-group-text d-flex justify-content-center text-white"><Searchicon /></span>
                    </div>
                </div>

            </div>
            <div className="row mt-5">
                <p>Все товары {faceData.length}</p>
                {
                    currentOrder.map((item, index) => {
                        return (
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
                                <Link to={`${item.id}`}>
                                    <div className="card border-0">
                                        <div className="card-header d-flex justify-content-between border-bottom-0">
                                            <div className="w-25">
                                                <div className={`skidka rang1 ${item.podarka != true ? 'd-none' : ''}`} >
                                                    <img src={icon1} alt="icon" className={`${item.podarka != true ? 'd-none' : ''}`} />
                                                </div>
                                                <div className={`skidka rang2 ${item.skidka != true ? 'd-none' : ''}`} >
                                                    <img src={icon2} alt="icon" className={`${item.skidka != true ? 'd-none' : ''}`} />
                                                </div>
                                                <div className={`skidka rang4 ${item.maxsusskdk != true ? 'd-none' : ''}`} >
                                                    <img src={icon3} alt="icon" className={`${item.maxsusskdk != true ? 'd-none' : ''}`} />
                                                </div>
                                                <div className={`skidka rang3 ${item.obmen != true ? 'd-none' : ''}`} >
                                                    <img src={icon4} alt="icon" className={`${item.obmen != true ? 'd-none' : ''}`} />
                                                </div>
                                            </div>
                                            <div className="w-75">
                                                <img src={item.inages} alt={`product-${index + 1}`} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h3>{item.nomi}</h3>
                                            <h2>{item.narxi} сум</h2>
                                            <button className="btn btn-danger w-75">от {item.oyigaNarhi} сум</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row mt-5">
                <Pagination size="sm" className='justify-content-center'>
                    {items ? items : ''}
                </Pagination>
            </div>
        </div>
    )
}

export default Product