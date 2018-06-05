import React from 'react';


const tiers = props => {
  return (
    <div className= "tier-levels">

    <h1 className="App-title">Tier:</h1>

    <button className={props.tierFilter==='1' ? "active-tierbutton" : "tierbutton"} onClick={() => props.setTierFilter("1")}>1</button>
    <button className={props.tierFilter==='2' ? "active-tierbutton" : "tierbutton"} onClick={() => props.setTierFilter("2")}>2</button>
    <button className={props.tierFilter==='3' ? "active-tierbutton" : "tierbutton"} onClick={() => props.setTierFilter("3")}>3</button>
    <button className={props.tierFilter==='4' ? "active-tierbutton" : "tierbutton"} onClick={() => props.setTierFilter("4")}>4</button>
    <button className={props.tierFilter==='5' ? "active-tierbutton" : "tierbutton"} onClick={() => props.setTierFilter("5")}>5</button>
    <button className={props.tierFilter==='6' ? "active-tierbutton" : "tierbutton"} onClick={() => props.setTierFilter("6")}>6</button>


</div>
);
}

export default tiers;
