import Sidebar from '../../components/perfil/Sidebar';
import Header from '../../components/perfil/Header';
import Conteudo from '../../components/perfil/Conteudo';
import styles from "../../components/perfil/Perfil.module.css";
import acessibilidade from "../../scripts/acessibilidade";

function Perfil() {
    acessibilidade();

    return(
        <>
            <main className={styles.bodyPerfil}>
                <div className={styles.main_container}>
                    <Header />
                    <Sidebar />
                    <Conteudo />
                </div>
            </main>
        </>
    )
}

export default Perfil;