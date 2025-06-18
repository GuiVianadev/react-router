import "./styles.css"
import { Outlet } from "react-router"

export function Layout() {
    return (
        <div>
            <header className="user">
                <p>Olá, Rodrigo</p>
            </header>

            <Outlet />

            <footer className="copyright">
                <span>Todos os direitos reservados</span>
            </footer>
        </div>
    )
}