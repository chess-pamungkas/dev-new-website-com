import React, { useState } from "react";

export const CookieTypeItem = ({cookieType, acceptedCookies, setAcceptedCookies}) => {
    const [checked, setChecked] = useState(false);

    const onClick = () => {
        acceptedCookies[cookieType] = !checked;
        setAcceptedCookies(acceptedCookies)
        setChecked(!checked)
    }

    return (
        <div className="gdpr-popup__item">
            <input type="checkbox" checked={checked} id={cookieType} onChange={onClick}/>
            <label for={cookieType}>{cookieType}</label>
        </div>
    )

}