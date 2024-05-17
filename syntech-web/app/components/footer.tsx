export default function Footer() {
    return(
        <div className="flex flex-row justify-between items-center sticky top-0 z-50 px-16 py-3 bg-logo-blue">
            <img src={"/logo-claro.png" }  className="h-10 w-auto"/>
            <p className=" text-primary-light">Desarrollo de aplicaciones avanzadas de ciencias computacionales (Gpo 507)</p>
        </div>
    );
}