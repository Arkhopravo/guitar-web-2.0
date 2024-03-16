import React from 'react'
import './EcomCategories.scss'
import {Link, useNavigate} from 'react-router-dom'
function EcomCategories({item}) {
  const navigate = useNavigate();
  return (
    <div className="categories">
         <div className="col">
        <div className="row">
            <div className="elements">

              <Link className="link"  to={`/ecommerceproducts/${6}`}>
                <img
                  src="images\il_1080xN.4400097227_cjk5.webp"
                  alt=""
                  />
                    <button>
                        Sale
                     
                    </button>
                </Link>
            </div>
        </div>
        <div className="row">
        <div className="elements">

          <Link to={`/ecommerceproducts/${6}`} className="link">
          <img
            src='https://ae01.alicdn.com/kf/H78683ab66fdc402f92a761ff3fbad65b1/Customized-electric-guitar-rosewood-fingerboard-3-pickups-can-be-bounhttps://ae01.alicdn.com/kf/H78683ab66fdc402f92a761ff3fbad65b1/Customized-electric-guitar-rosewood-fingerboard-3-pickups-can-be-bound-change-color-stock.jpg_.webp'
            alt=""
            />
          <button>
              Guitars
          </button>
            </Link>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <div className="elements">
            <Link to={`/ecommerceproducts/${8}`} className="link">

          <img
            src="public\images\BaseGutiar.jpg"
            alt=""
            />
          <button>
              Bass Guitars
          </button>
            </Link>
            </div>
        </div>
      </div>


      
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <div className="elements">

              <Link to={`/ecommerceproducts/${4}`} className="link">
              <img
                src="public\images\Teenage-girl-playing-a-ukulele.jpg"
                alt=""
                />
              <button>
                  Ukulele
              </button>
                </Link>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <div className="elements">

                <Link to={`/ecommerceproducts/${7}`}className="link">
              <img
                src="https://i.etsystatic.com/7314652/r/il/a853ce/2284322428/il_570xN.2284322428_5492.jpg"
                alt=""
                />
              <button>
                  Mandoline
              </button>
                </Link>
            </div>
                </div>
          </div>
        </div>
        <div className="row">
        <div className="elements">

          <Link to={`/ecommerceproducts/${9}`} className="link">
          <img
            src="https://cdn.mos.cms.futurecdn.net/cNAZM5nqjFT2DJA3C3jpE4.jpg"
            alt=""
            />
          <button>
            Synthesizer
          </button>
            </Link>
            </div>
        </div>
      </div>
    </div>


 
  )
}

export default EcomCategories