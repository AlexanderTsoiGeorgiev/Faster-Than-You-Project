// import MyDropdown from "../MyComponents/MyDropdown";
import MyNavMenu from "../MyComponents/MyNavMenu";

// import Logo from "../../assets/Multi-Line-Logo.svg";

export default function Navigation() {
    return (
        <div className="flex justify-between bg-primary-500 text-background-50 p-4">
            <h1 className="font-bold text-3xl font-heading italic">Faster Than You</h1>
            {/* <div className="bg-slate-600 ">
                <img src={Logo} alt="FTY_logo" />
            </div> */}
            <section className="flex gap-8">
                <MyNavMenu></MyNavMenu>
            </section>
            <section className="flex items-center justify-center font-heading">
                <p>Log In</p>
            </section>
        </div>
    );
}
