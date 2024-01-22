import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import style from "../../assets/styles";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="bg-primary sticky top-0">
            <nav className={`${style.pageWidth}`}>
              <Navigation></Navigation>
            </nav>
        </div>

        <div className="bg-background flex-auto">
          <main className={style.pageWidth}>
            <Outlet />
          </main>
        </div>

          <div className="bg-primary">
              <footer className={style.pageWidth}>
                FOOTER
              </footer>
          </div>
      </div>
    </>
  )
}
