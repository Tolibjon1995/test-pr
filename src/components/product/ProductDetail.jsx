import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { faceData } from './FaceData'
import '../../styles/product.scss'
import icon1 from '../../images/icon/icon-bundle.png'
import icon2 from '../../images/icon/icon-скидка.png'
import icon3 from '../../images/icon/icon-скидка (1).png'
import icon4 from '../../images/icon/icon-trade in.png'
import { Checkbox } from '@mui/material'



const ProductDetail = () => {

  const [color1, setColor1] = useState(false)
  const [color2, setColor2] = useState(false)
  const [color3, setColor3] = useState(false)
  const [color4, setColor4] = useState(false)
  const [oynarx, setOynarx] = useState(0)
  // setOynarx(faceData[params.id - 1].narxi / 3 )
  const handleColorChange = (e) => {
    setOynarx(faceData[params.id - 1].narxi / e)
    if (e === 3) {
      setColor1(true)
      setColor2(false)
      setColor3(false)
      setColor4(false)
    }
    if (e === 6) {
      setColor1(false)
      setColor2(true)
      setColor3(false)
      setColor4(false)
    }
    if (e === 12) {
      setColor1(false)
      setColor2(false)
      setColor3(true)
      setColor4(false)
    }
    if (e === 24) {
      setColor1(false)
      setColor2(false)
      setColor3(false)
      setColor4(true)
    }
  }

  const params = useParams()
  console.log(faceData[params.id - 1]);
  return (
    <div className='container'>
      <div className="row">
        <h1>{faceData[params.id - 1].nomi}</h1>
        <div className="col-12 col-md-6 d-flex mt-3">
          <div className="w-25">
            <div className={`skidka rang1 ${faceData[params.id - 1].podarka != true ? 'd-none' : ''}`} >
              <img src={icon1} alt="icon" className={`${faceData[params.id - 1].podarka != true ? 'd-none' : ''}`} />
            </div>
            <div className={`skidka rang2 ${faceData[params.id - 1].skidka != true ? 'd-none' : ''}`} >
              <img src={icon2} alt="icon" className={`${faceData[params.id - 1].skidka != true ? 'd-none' : ''}`} />
            </div>
            <div className={`skidka rang4 ${faceData[params.id - 1].maxsusskdk != true ? 'd-none' : ''}`} >
              <img src={icon3} alt="icon" className={`${faceData[params.id - 1].maxsusskdk != true ? 'd-none' : ''}`} />
            </div>
            <div className={`skidka rang3 ${faceData[params.id - 1].obmen != true ? 'd-none' : ''}`} >
              <img src={icon4} alt="icon" className={`${faceData[params.id - 1].obmen != true ? 'd-none' : ''}`} />
            </div>
          </div>
          <div className="w-75 h-50">
            <img src={faceData[params.id - 1].inages} alt={`product-${params.id}`} className='w-75' />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p>Цена телефона</p>
          <h3>6 000 000 сум</h3>
          <p>Общая цена (с наценкой)</p>
          <div className="d-flex justify-content-between pe-5">
            <h3>{faceData[params.id - 1].narxi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} сум</h3>
            <h3>{oynarx.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} сум</h3>
          </div>
          <div className="oylar">
            <div className={`oy brd ${color1 ? 'active' : ''}`} onClick={() => handleColorChange(3)}>3  мес</div>
            <div className={`oy  ${color2 ? 'active' : ''}`} onClick={() => handleColorChange(6)}>6  мес</div>
            <div className={`oy  ${color3 ? 'active' : ''}`} onClick={() => handleColorChange(12)}>12  мес</div>
            <div className={`oy brd2 ${color4 ? 'active' : ''}`} onClick={() => handleColorChange(24)}>24  мес</div>
          </div>
          <span>Наценка: 5%</span>
          <p>Общие характеристики</p>
          <h3>Тип: моноблок (классический)
            Стандарт: 2G, 3G, 4G (LTE), 5G
            Операционная система: iOS 14
          </h3>

          <a href="#" className='text-suk'>Показать все</a>
        </div>
      </div>
      <div className="row mt-5">
        <p className='text-suk'>Акции</p>
        <div className="col-10 mt-5 d-flex justify-content-between">
          <div className='d-block d-sm-flex align-items-center'>
            <div className={`skidka rang3`} >
              <img src={icon4} alt="icon" />
            </div>
            <div className="aksiya-text ms-sm-3">
              <p>Обменяй свой старый айфон и получи скидку на новый</p>
              <h5>Apple EarPods</h5>
            </div>

          </div>
          <Checkbox />
        </div>
        <div className="col-10 mt-5 d-flex justify-content-between">
          <div className='d-block d-sm-flex align-items-center'>
            <div className={`skidka rang1 `} >
              <img src={icon1} alt="icon" />
            </div>
            <div className="aksiya-text ms-sm-3">
              <p>Наушники в подарок</p>
              <h5>Apple EarPods</h5>
            </div>

          </div>
          <Checkbox />
        </div>
        <div className="col-10 mt-5 d-flex justify-content-between">
          <div className='d-block d-sm-flex align-items-center'>
            <div className={`skidka rang2 `} >
              <img src={icon2} alt="icon" />
            </div>
            <div className="aksiya-text ms-sm-3">
              <p>Скидка 20% на смартфоны</p>
              <h5>10 000 сум</h5>
            </div>

          </div>
          <Checkbox />
        </div>
        <div className="col-10 mt-5 d-flex justify-content-between">
          <div className='d-block d-sm-flex align-items-center'>
            <div className={`skidka rang4 `} >
              <img src={icon3} alt="icon" />
            </div>
            <div className="aksiya-text ms-sm-3">
              <p>Скидка на айфоны</p>
              <h5>IMEI 012345678901234</h5>
            </div>

          </div>
          <Checkbox />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <button className='btns w-100'>Добавить в корзину</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail