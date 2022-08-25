import React, { useState } from "react";
import cn from "classnames";

export const CookieTypeItem = ({cookieType, acceptedCookies, setAcceptedCookies}) => {
    const [checked, setChecked] = useState(cookieType.initialValue);

    const onClick = () => {
        acceptedCookies[cookieType.key] = !checked;
        setAcceptedCookies(acceptedCookies)
        setChecked(!checked)
        console.log(acceptedCookies)
    }

    return (
        <div className="gdpr-popup__item">
            <div className={cn("gdpr-popup__cookie-type", { "gdpr-popup__cookie-type--disabled": !cookieType.canBeChanged })}>{cookieType.title}</div>
            <label class="gdpr-popup__switch">
                <input className="gdpr-popup__checkbox" type="checkbox" checked={checked} id={cookieType.key} onChange={cookieType.canBeChanged ? onClick: undefined} />
                <span class={cn("gdpr-popup__slider", { "gdpr-popup__slider--checked": checked }, { "gdpr-popup__slider--disabled": !cookieType.canBeChanged })}></span>
            </label>
        </div>
    )

}