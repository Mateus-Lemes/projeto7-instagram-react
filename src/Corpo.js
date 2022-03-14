import Stories from "./Stories"
import Posts from "./Posts"
import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}

function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}

function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario imagem="assets/img/catanacomics.svg" nomePerfil="catanacomics" nomeUsuario ="Catana" />
            <Sugestoes />
        </div>
    )
}