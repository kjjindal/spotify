import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon,title}){
    return (
        <>
        <div className="sidebaroption">
        {Icon && <Icon className="sidebaroption__icon"   />}
        {Icon ? (<h4> {title} </h4>):(<p> {title} </p>)}
        
        

        </div>



        </>
    )
}



export default SidebarOption;