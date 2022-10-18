import Sidebar from '../../components/Perfil/Sidebar'
import Header from '../../components/Perfil/Header';
import Conteudo from '../../components/Perfil/Conteudo';

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