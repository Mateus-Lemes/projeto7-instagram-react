export default function Sugestoes() {
    const sugestoes = [
        <Sugestao imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" />,
        <Sugestao imagem="assets/img/chibirdart.svg" nome="chibirdart" />,
        <Sugestao imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" />,
        <Sugestao imagem="assets/img/adorable_animals.svg" nome="adorable_animals" />,
        <Sugestao imagem="assets/img/smallcutecats.svg" nome="smallcutecats" />
    ]
    return (
        <div class="sugestoes">
            <Titulo />
            {sugestoes.map(sugestao => sugestao)}
            <Links />
            <Copyright />
        </div>
    )

}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} alt=""/>
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function Titulo() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}

function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}