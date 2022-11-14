import React from "react";
import "../../assets/css/Oficina/estilosFooterOficina.css"

class FooterOficina extends React.Component {
    render() {
        return (
            <>
                <footer className="m-grid__item	m-footer  container-footer">
                    <div className="m-container m-container--fluid m-container--full-height m-page__container">
                        <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                            <div className="text-center m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                                <span className="m-footer__copyright">2022 Desarrollado por<a href="https://futurum.software" className="m-link"> Futurum Software</a>
                                    <img width="40px" src="/logo-f.png" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default FooterOficina;