import React from 'react'
import {Button, HStack} from "@chakra-ui/react"
import {Link} from "react-router-dom";
// import {ReactComponent as HomeLogo} from '../assets/dynnamitt_home.svg';

const Header= () => {
    return <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
            {/* <svg  xmlns="../../public/dynnamitt_home"></svg> */}
            {/* <HomeLogo /> */}
<Button variant={"unstyled"} color={"White"}>
    <Link to ="/">Home</Link>
</Button>
<Button variant={"unstyled"} color={"White"}>
    <Link to ="/exchanges">Exchanges</Link>
</Button>
<Button variant={"unstyled"} color={"White"}>
    <Link to ="/coins">Coins</Link>
</Button>
    </HStack>;
};

export default Header;