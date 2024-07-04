import {useMediaQuery} from "@chakra-ui/react";
// assets
import background_shape from "../static/login/background_shape.png";
import background_shape_tablet from "../static/login/background_shape_tablet.png";
import background_shape_mobile from "../static/login/background_shape_mobile.png";


export function getDisplayType() {
    const [isTablet] = useMediaQuery("(max-width: 768px)");
    const [isPhone] = useMediaQuery("(max-width: 375px)");

    return isPhone ? "phone" : isTablet ? "tablet" : "desktop";
}

export function getBackgroundShape() {
    const displayType = getDisplayType();

    if (displayType === "phone") {
        return background_shape_mobile;
    } else if (displayType === "tablet") {
        return background_shape_tablet;
    } else {
        return background_shape;
    }
}