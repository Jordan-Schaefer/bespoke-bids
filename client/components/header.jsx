import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className='head py-2'>
          <h1 className='text-center text-light'>
            Pergolas by Bespoke
          </h1>
        </div>
        <div>
          <h3 className='text-center text-med py-3'>
            Orange Counties <i>Premier</i> Pergola and Install
          </h3>
        </div>
      </>
    );
  }
}
export default Header;
