export const NECESSARY_COOKIE_KEY = "necessary";
export const PERFORMANCE_COOKIE_KEY = "performance";
export const SEGMENTATION_COOKIE_KEY = "segmentation";

export const NECESSARY_COOKIE = {
    title: "Strictly necessary cookies", 
    categoryKey: NECESSARY_COOKIE_KEY, 
    initialValue: true, 
    canBeChanged: false,
}

export const PERFORMANCE_COOKIE = {
    title: "Performance Cookies", 
    categoryKey: PERFORMANCE_COOKIE_KEY, 
    initialValue: true, 
    canBeChanged: true,
}

export const SEGMENTATION_COOKIE = {
    title: "Segmentation Cookies", 
    categoryKey: SEGMENTATION_COOKIE_KEY, 
    initialValue: true, 
    canBeChanged: true,
}


export const GDPR_COOKIE_CATEGORIES = [
    NECESSARY_COOKIE,
    PERFORMANCE_COOKIE,
    SEGMENTATION_COOKIE,
]

export const DEFAULT_COOKIE_CONSENT = {[NECESSARY_COOKIE_KEY]: true, [PERFORMANCE_COOKIE_KEY]: true, [SEGMENTATION_COOKIE_KEY]: true}

export const COOKIE_CONSENT_KEY = "cookieConsent";
export const COOKIE_POPUP_SHOWN_KEY = "cookiePopupShown";
