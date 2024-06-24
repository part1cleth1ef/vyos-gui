import {useMediaQuery} from "@chakra-ui/react";

export function getDisplayType() {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isPhone] = useMediaQuery("(max-width: 375px)");
  
    return isPhone ? "phone" : isTablet ? "tablet" : "desktop";
}