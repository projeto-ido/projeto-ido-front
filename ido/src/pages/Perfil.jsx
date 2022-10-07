import Sidebar from '../components/perfil/Sidebar'
import Header from '../components/perfil/Header';

function Perfil() {
    return(
        <>
            <div class="main-container">
                <Header />
                <Sidebar />

                <div class="conteudo">
                    <div class="container"></div>
                </div>
            </div>
        </>
    )
}

export default Perfil;