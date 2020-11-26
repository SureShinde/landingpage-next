import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "../../helper/breakpoint/index";
import { colors } from "../../theme";
import Image from "../Image/index";
import Link from "next/link";

const Flex = styled.div`
    display : flex;
    padding : ${({ padding }) => padding};
    ${breakpoint.xs`
        flex-direction : column;
        justify-content : center;
        text-align : center;
    `}
    ${breakpoint.md`
        flex-direction : row;
        justify-content : space-between;
    `}
`

const Box = styled.div`
   align-self : ${({ alignSelf }) => alignSelf};
   h2{
      font-family : "HouseSlant-Regular";
      color : ${colors.magentaOld}
   }
   p{
      font-family : "OpenSans-SemiBold";
      font-size : 19px;
      color : ${colors.magentaOld}
   }
   h2,p{
       margin: 0;
   }
   ${breakpoint.md`
     flex-basis : ${({ basis }) => basis}%;
     text-align : ${({ align }) => align};
     ul{
        padding-left : 0;
        li{
            list-style-type : none;
            padding-left : 0;
        }
    }
   `}
`

const FooterContainer = styled.div`
    margin-bottom : 1rem;
    background-color: ${colors.whiteNormal}
`

const Footer = () => {
    return (
        <FooterContainer>
            <Flex padding="4rem 5rem">
                <Box basis={25} align="justify">
                    <h2>
                        Contact Us
                </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consec
                        tetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum
                </p>
                </Box>
                <Box basis={25}>
                    <Flex>
                        <Box>
                            <h2>about</h2>
                        </Box>
                        <Box>
                            <Link href="#">
                                <a>
                                    <p>Team</p>
                                </a>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#">
                                <a>
                                    <p>Join Us</p>
                                </a>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#">
                                <a>
                                    <p>Ethic</p>
                                </a>
                            </Link>
                        </Box>
                    </Flex>
                </Box>
                <Box basis={25} alignSelf="center">
                    <Flex>
                        <Box basis={25}>
                            <Link href="#">
                                <a>
                                    <Image
                                        src="/assets/images/icons/Facebook.png"
                                        width={35}
                                        height={35}
                                    />
                                </a>
                            </Link>
                        </Box>
                        <Box basis={25}>
                            <Link href="#">
                                <a>
                                    <Image
                                        src="/assets/images/icons/Instagram.png"
                                        width={35}
                                        height={35}
                                    />
                                </a>
                            </Link>
                        </Box>
                        <Box basis={25}>
                            <Link href="#">
                                <a>
                                    <Image
                                        src="/assets/images/icons/Twitter.png"
                                        width={35}
                                        height={35}
                                    />
                                </a>
                            </Link>
                        </Box>
                        <Box basis={25}>
                            <Link href="#">
                                <a>
                                    <Image
                                        src="/assets/images/icons/WhatsApp.png"
                                        width={35}
                                        height={35}
                                    />
                                </a>
                            </Link>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </FooterContainer>
    )
}

export default Footer