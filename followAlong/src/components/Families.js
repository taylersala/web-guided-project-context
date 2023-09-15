import "../styles.scss";
import React, { useContext } from "react";
import { FamilyContext } from "../App";

const Families = () => {
    const familyContext = useContext(FamilyContext);  
    console.log(familyContext)
    return( 
    <section className="header">
        <h1>Family Trees</h1>
        {familyContext.families.map(family => (
            <button
                className={`family-button ${familyContext.family.familyName
                    ===
                    familyContext.activeFamily.familyName && "active"}`}
                key={familyContext.family.familyName}
                onClick={() => setActiveFamily(familyContext.family)}
            >
                {familyContext.family.familyName}
            </button>
        ))}
    </section>)
}; 


export default Families;