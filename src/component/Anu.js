import React from "react";
import './Anu.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Anu(){
    return(
        <div className="container">
        <div className="i">

        <h5 > <ShoppingCartIcon/>Online Store</h5>
       <p>Discover your new Mercedes</p> 
       </div>
       <div className="j" >

        <h5> <ManageAccountsIcon/>Configurator</h5>
       <p>Configure your vehicle now.
</p> 
       </div>
       <div className="k">
        <h5> <CalendarMonthIcon/>Finance & Insurance</h5>
       <p>Find your suitable financial product.

</p> 
       </div>
       </div>
    )
}
export default Anu;