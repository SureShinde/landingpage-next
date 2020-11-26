import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import zIndex from "@material-ui/core/styles/zIndex";

const ImageComponent = ({ src, width, height, alt, indexing }) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            style={{
                zIndex: indexing
            }}
        />
    )
}

// ImageComponent.propTypes = {
//     alt: PropTypes.isRequired
// };

export default ImageComponent;