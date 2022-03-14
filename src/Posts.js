import Icone from "./Icone"

export default function Posts() {
    const posts = [
        <Post usuarioDoPost ="meowed" imagemUsuarioTopo="assets/img/meowed.svg" imagemConteudo = "assets/img/gato-telefone.svg" imagemDeQuemCurtiu="assets/img/respondeai.svg" nomeDeQuemCurtiu="respondeai" qtdCurtidas="101.523"/>,
        <Post usuarioDoPost ="barked" imagemUsuarioTopo="assets/img/barked.svg" imagemConteudo = "assets/img/dog.svg" imagemDeQuemCurtiu="assets/img/adorable_animals.svg" nomeDeQuemCurtiu="adorable_animals" qtdCurtidas="99.159"/>
    ]
    return (
        <div class="posts">
            {posts.map(post => post)}
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <Topo usuarioTopo ={props.usuarioDoPost} imagemTopo={props.imagemUsuarioTopo}/>
            <Conteudo imagem={props.imagemConteudo}/>
            <Fundo imagemFundo={props.imagemDeQuemCurtiu} usuarioFundo={props.nomeDeQuemCurtiu} curtidas={props.qtdCurtidas}/>
        </div>

    )
}

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagemTopo} alt=""/>
                {props.usuarioTopo}
            </div>
            <div class="acoes">
                <Icone name="ellipsis-horizontal" />
            </div>
        </div>
    )
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.imagem} alt=""/>
        </div>
    )
}

function Fundo(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <Icone name="heart-outline" />
                    <Icone name="chatbubble-outline" />
                    <Icone name="paper-plane-outline" />
                </div>
                <div>
                    <Icone name="bookmark-outline" />
                </div>
            </div>
            <Curtidas imagem ={props.imagemFundo} usuario = {props.usuarioFundo} curtidasFinal= {props.curtidas}/>
        </div>
    )   
}

function Curtidas (props) {
    return (
        <div class="curtidas">
            <img src={props.imagem} alt=""/>
            <div class="texto">
                Curtido por <strong>{props.usuario}</strong> e <strong>outras {props.curtidasFinal} pessoas</strong>
            </div>
        </div>
    )
}