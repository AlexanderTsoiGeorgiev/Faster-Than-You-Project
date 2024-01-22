// import MyDropdown from "../MyComponents/MyDropdown";
import MyNavMenu from "../MyComponents/MyNavMenu";

// import Logo from "../../assets/Multi-Line-Logo.svg";

export default function Navigation() {
    return (
        <nav className="flex justify-between bg-primary text-background p-4">
            <h1 className="font-extrabold text-4xl">Faster Than You</h1>
            {/* <div className="bg-slate-600 ">
                <img src={Logo} alt="FTY_logo" />
            </div> */}
            <section className="flex gap-8">
                <MyNavMenu></MyNavMenu>
                {/* <MyDropdown></MyDropdown> */}
                {/* <MyDropdown></MyDropdown>
                <MyDropdown></MyDropdown>
                <MyNavMenu></MyNavMenu> */}
            </section>
            <section className="flex items-center justify-center">
                <p>Log In</p>
            </section>
        </nav>
    )
}