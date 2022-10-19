import Sidebar from '../../components/perfil/Sidebar';
import Header from '../../components/perfil/Header';
import Conteudo from '../../components/perfil/Conteudo';

function Perfil() {
    return(
        <>
            <div className="main-container">
                <Header />
                <Sidebar />
                <Conteudo />
            </div>
        </>
    )
}

export default Perfil;