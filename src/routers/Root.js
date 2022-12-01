import Home from "./Home";
import replaceBg from "../utils/utils";

export default function Root() {
    /*useEffect(() => {
        document.querySelector("body").dataset.bgPage = "/";
    });*/
    replaceBg("body-page_Bg--Home");
    return (
        <>
            <Home />
        </>
    );
}