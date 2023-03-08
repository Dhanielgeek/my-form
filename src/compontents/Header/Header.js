import React from 'react';
import "./style.css"
import { AiOutlineLock} from 'react-icons/ai';

const Header = () => {
  return (
    <div>
      <div className='Headcom'>
        <div className='my_hold'>
          <div className='Logocon'>
            AjTech Watch
          </div>
          <div className='Navigation'>
            <div className='Nav'>Home</div>
            <div className='Nav'>Features</div>
            <div className='Nav'>Product</div>
            <div className='Nav'>Reviews</div>
            <div className='Nav'>Blog</div>
            <div className='Iconnav'>
              <AiOutlineLock style={{
                color: "white",
                fontSize: "23px"
              }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;