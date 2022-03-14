import Icone from "./Icone"

export default function Stories() {
    const stories = [
        <Story imagem="assets/img/9gag.svg" nome="memeriagourmet"/>,
        <Story imagem="assets/img/meowed.svg" nome="memeriagourmet"/>,
        <Story imagem="assets/img/barked.svg" nome="barked"/>,
        <Story imagem="assets/img/nathanwpylestrangeplanet.svg" nome="nathanwpylestrangeplanet"/>,
        <Story imagem="assets/img/wawawicomics.svg" nome="wawawicomics"/>,
        <Story imagem="assets/img/respondeai.svg" nome="respondeai"/>,
        <Story imagem="assets/img/filomoderna.svg" nome="filomoderna"/>,
        <Story imagem="assets/img/memeriagourmet.svg" nome="memeriagourmet"/>
    ]
    return (
        <div class="stories">
            {stories.map(story => story)}
            <Setinha />
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt=""/>
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}

function Setinha() {
    return (
        <div class="setinha">
            <Icone name="chevron-forward-circle" />
        </div>
    )
}