import Icone from "./Icone"

export default function Navbar(){
    return (
        <div class="navbar">
            <div class="container">
                <Logo />
                <LogoMobile />
                <InstagramMobile />
                <Pesquisa />
                <Icones />
                <IconesMobile />
            </div>
        </div>

    )
}

function Logo() {
    return (
        <div class="logo">
            <Icone name="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt=""/>
        </div>
    )
}

function LogoMobile() {
    return (
        <div class="logo-mobile">
            <Icone name="logo-instagram" />
        </div>
    )
}

function InstagramMobile() {
    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" alt=""/>
        </div>
    )
}

function Pesquisa() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function Icones() {
    return (
        <div class="icones">
            <Icone name="paper-plane-outline" />
            <Icone name="compass-outline" />
            <Icone name="heart-outline" />
            <Icone name="person-outline" />
        </div>
    )
}

function IconesMobile() {
    return (
        <div class="icones-mobile">
            <Icone name="paper-plane-outline" />
        </div>
    )
}



