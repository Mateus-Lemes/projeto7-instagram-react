export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagem} alt=""/>
            <div class="texto">
              <strong>{props.nomePerfil}</strong>
              {props.nomeUsuario}
            </div>
        </div>
    )
}