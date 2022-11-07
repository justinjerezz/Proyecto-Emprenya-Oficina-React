import React from "react";
import "../../assets/css/Oficina/estilosFooterOficina.css"

class FooterOficina extends React.Component {
    render() {
        return (
            <>
                <footer class="m-grid__item	m-footer  container-footer">
                    <div class="m-container m-container--fluid m-container--full-height m-page__container">
                        <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                            <div class="text-center m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                                <span class="m-footer__copyright">2022 Desarrollado por<a href="https://futurum.software" class="m-link"> Futurum Software</a>
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