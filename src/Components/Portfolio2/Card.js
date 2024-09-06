import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='fa fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fa fa-arrow-right'></i>
          </a>
        </div>
      </div>

     
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Responsive Web Design always plays an important role whenever going to promote your website.</p>
              <p>Coding tells a machine which actions to perform and how to complete tasks.</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='fa fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fa fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fa fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card 