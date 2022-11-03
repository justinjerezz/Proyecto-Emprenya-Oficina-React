import React from "react";
import Iframe from "react-iframe";
import "../../assets/css/Oficina/style.css"

class IframeBlockChainYa extends React.Component {
    render() {
        return (
            <>
                <Iframe url="https://blockchainya.com/"
                    width="100%"
                    height="1000px"
                    id=""
                    className="iframeGeneral"
                    display="block"
                    position="relative" />
            </>
        )
    }
}

export default IframeBlockChainYa;