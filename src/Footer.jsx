import React from 'react';
function Footer(){

    const date = new Date();
   

    return <h6 className = "footer">Copyright © {date.getFullYear()}</h6>;
}



export default Footer;