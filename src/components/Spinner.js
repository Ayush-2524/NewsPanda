// import React, { Component } from 'react'
import loading from './loading.gif';
// export class Spinner extends Component {
const Spinner = () => {
    return (
      <div>
        <div className="text-center my-3" >
          <img style={{ width: '20%',height: '20%', margin: 'auto' }} src={loading} alt="Loading..." />
        </div>
      </div>
    )
}

export default Spinner
