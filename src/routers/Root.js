import Home from "./Home";
import replaceBg from "../utils/utils";

export default function Root() {
    replaceBg("body-page_Bg--Home");
    return (
        <>
            <Home />
        </>
    );
}