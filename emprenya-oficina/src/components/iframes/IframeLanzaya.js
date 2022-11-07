import React from "react";
import Iframe from "react-iframe";
import "../../assets/css/Oficina/estilosIframes.css"

class IframeLanzaya extends React.Component {
    render() {
        return (
            <>
                <Iframe url="https://lanzaya.com"
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

export default IframeLanzaya;