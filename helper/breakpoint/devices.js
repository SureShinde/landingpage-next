// import the device size that have been declare before
import size from "./sizes.js";

/* 
    define the min width as mobile device that have been declare in the size.js
    make sure the min width or max width are same with your needs when playing with media query 
    https://jsramblings.com/how-to-use-media-queries-with-styled-components/
*/
const devices = {
    mobileSmall : `(max-width : ${size.mobileSmall})`,
    mobile : `(max-width : ${size.mobile})`,
    tablet : `(min-width : ${size.tablet}) and (max-width : ${size.tabletMax})`,
    wide : `(min-width : ${size.wide})`,
    desktop : `(min-width : ${size.desktop})`,
    wideScreen : `(max-width : ${size.wideScreen})`,
    laptop : `(max-width : ${size.laptop})`,
}   

export default devices;