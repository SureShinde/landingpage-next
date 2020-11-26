import React, { useState } from "react"
import Head from 'next/head'
import Layout from "../components/Layout/";
import Section from "../components/Section/index";
import Heading from "../components/HeadingText/index";
import { colors, clipPaths, theme } from "../theme/index";
import Description from "../components/DescriptionText";
import Button from "../components/Button/index";
import Divider from "../components/Divider/index";
import Image from "next/image";
import { Flex, Box } from "reflexbox";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { motion } from "framer-motion";
import { Zoom, Fade, Roll, Flip } from 'react-reveal/';

export default function Home() {
  const { triangle, normal, parallelogram } = clipPaths;
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitData = e => {
    e.preventDefault();
    const users = [{
      fullname,
      email,
      message
    }];

    let data = JSON.parse(localStorage.getItem("users"));
    if (!data) {
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      data = [...data, ...users];
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  return (
    <React.Fragment>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section
          color={colors.yellow}
          clipPath={triangle} height={100}
          imgSrc="/assets/images/banner.webp"
        >
          <motion.div>
            <Divider position="absolute" right="10%" bottom="45%" width="27%">
              <motion.div
                initial={{
                  x: 125
                }}
                animate={{ x: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 2 }}
              >
                <Heading color={colors.magentaOld} fontSize={5} align="center">
                  Welcome To My Portofolio
              </Heading>
              </motion.div>
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <Description color={colors.magentaOld} fontSize={1} margin="0 0 1rem">
                  Lorem ipsum dolor sit amet, consectetur
                  elit, sed do eiusmod tempor incididunt
            </Description>
              </motion.div>
              <motion.div
                // whileHover={{ backgroundColor: colors.magentaOld, color: colors.whiteNormal }}
                // whileTap={{ scale: 0.9 }}
                initial={{
                  scale: 0.9
                }}
                animate={{
                  scale: 1.1
                }}
                exit={{
                  scale: 0.9
                }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
              >
                <Divider>
                  <Button text="READ MORE" padding={10} fontSize={16} borderRadius="20px" />
                </Divider>
              </motion.div>
            </Divider>
          </motion.div>
        </Section>
        <Section bottom="-8rem">
          <Container>
            <Flex>
              <Box mr={5} style={{ zIndex: 3 }}>
                <Roll>
                  <Image
                    src="/assets/images/me.webp"
                    alt="Picture of the author"
                    width={450}
                    height={500}
                  />
                </Roll>
              </Box>
              <Box>
                <Flex>
                  <Box >
                    <Divider display="inline">
                      <h3>Who I Am</h3>
                    </Divider>
                    <Divider display="inline">
                      <Fade>
                        <Description color={colors.blue} align="left">
                          My Name is Arya Wirasandi
                      </Description>
                      </Fade>
                      <Fade>
                        <Description color={colors.black} align="left" margin="1rem 0 0 0 ">
                          Iam a software developer (Front End) at PT Ako Media Asia, love to learning new things in technology especially front end
                      </Description>
                      </Fade>
                    </Divider>
                    <Button text="Download My CV" color={colors.whiteNormal} padding={15} fontSize={12} margin="1rem 0 0 0" backgroundColor={colors.magentaOld} />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Section>
        <Section height={160} color={colors.blueEggSalt} clipPath={parallelogram} margin="0 0 8rem 0">
          <Divider
            position="absolute"
            bottom="20%"
            right="10%"
          >
            <Flex justifyContent="center">
              <Flip>
                <Box

                  textAlign="center"
                  mr={1}
                >
                  <Image
                    src="/assets/images/portfolio/portfolioOne.svg"
                    width={250}
                    height={250}
                    alt="Portfolio One"
                  />
                  <Heading color={colors.magentaOld}>XL Home</Heading>
                  <Description color={colors.magentaOld} fontSize={1} align="justify" lineHeight={24} width={60}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur
</Description>
                  <Button text="READ MORE" padding={10} fontSize={12} borderRadius="20px" margin="1rem 0 0 0" />
                </Box>
              </Flip>
              <Flip>
                <Box

                  textAlign="center"
                  mr={1}
                >
                  <Image
                    src="/assets/images/portfolio/portfolioTwo.svg"
                    width={250}
                    height={250}
                    alt="Portfolio Two"
                  />
                  <Heading color={colors.magentaOld}>Nutriclub Static Site</Heading>
                  <Description color={colors.magentaOld} fontSize={1} align="justify" lineHeight={24} width={60}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur
</Description>
                  <Button text="READ MORE" padding={10} fontSize={12} borderRadius="20px" margin="1rem 0 0 0" />
                </Box>
              </Flip>
              <Flip>
                <Box

                  textAlign="center"
                  mr={1}
                >
                  <Image
                    src="/assets/images/portfolio/portfolioThree.svg"
                    width={250}
                    height={250}
                    alt="Portfolio Three"
                  />
                  <Heading color={colors.magentaOld}>Nutriclub</Heading>
                  <Description color={colors.magentaOld} fontSize={1} align="justify" lineHeight={24} width={60}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur
</Description>
                  <Button text="READ MORE" padding={10} fontSize={12} borderRadius="20px" margin="1rem 0 0 0" />
                </Box>
              </Flip>
            </Flex>
          </Divider>
        </Section>
        <Section>

        </Section>
        <Section
          height={50}
          color={colors.whiteNormal}
        >
          <Divider
            position="absolute"
            bottom="100%"
            right="23%"
          >
            <Flex justifyContent="center">
              <Zoom left cascade>
                <Box
                  alignContent="center"
                >
                  <Image
                    src="/assets/images/portfolio/portfolioOne.svg"
                    width={250}
                    height={250}
                    alt="Portfolio One"
                  />
                </Box>
                <Box>
                  <Image
                    src="/assets/images/portfolio/portfolioTwo.svg"
                    width={250}
                    height={250}
                    alt="Portfolio Two"
                  />
                </Box>
                <Box>
                  <Image
                    src="/assets/images/portfolio/portfolioThree.svg"
                    width={250}
                    height={250}
                    alt="Portfolio Three"
                  />
                </Box>
              </Zoom>
            </Flex>
          </Divider>
          <Divider marginTop={64}>
            <Zoom>
              <Heading color={colors.magentaOld} fontSize={3} align="center" margin="1rem 0">
                what you can find
            </Heading>
            </Zoom>
          </Divider>
          <Flex
            justifyContent="center"
          >
            <Box width={1 / 3} mr={3}>
              <Zoom>
                <Description color={colors.magentaOld} fontSize={1} align="justify" lineHeight={24}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur
              </Description>
              </Zoom>
            </Box>
            <Box width={1 / 3}>
              <Zoom>
                <Description color={colors.magentaOld} fontSize={1} align="justify" lineHeight={24}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip.
              </Description>
              </Zoom>
            </Box>
          </Flex>
          <Divider marginTop={24}>
            <Button text="MORE INFO" padding={10} fontSize={16} borderRadius="20px" color={colors.whiteNormal} backgroundColor={colors.magentaOld} width={20} />
          </Divider>
        </Section>
        <Zoom>
          <Section
            color={colors.yellow}
            clipPath={triangle} height={100}
            imgSrc="/assets/images/banner-two.webp"
          >
          </Section>
        </Zoom>
        <Section
          color={colors.whiteNormal}
          clipPaths={normal}
        >
          <Zoom>
            <Divider marginTop={64}>
              <Heading color={colors.magentaOld} fontSize={3} align="center" margin="1rem 0">
                Get to Know Us
            </Heading>
            </Divider>
          </Zoom>
          <Flex
            justifyContent="center"
          >
            <Box width={1 / 3} mr={3}>
              <Fade>
                <Description color={colors.magentaOld} fontSize={1} align="justify" lineHeight={24}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur

                  Aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque poromet
              </Description>
              </Fade>
            </Box>
            <Box width={1 / 3}>
              <Fade>
                <Description color={colors.magentaOld} fontSize={1} align="justify" lineHeight={24}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur

                  Aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque poromet
              </Description>
              </Fade>
            </Box>
          </Flex>
          <Divider marginTop={24}>
            <Button text="MORE INFO" padding={10} fontSize={16} borderRadius="20px" color={colors.whiteNormal} backgroundColor={colors.magentaOld} width={20} />
          </Divider>
        </Section>
        <Section height={150} color={colors.blueEggSalt} clipPath={parallelogram}>
          <Divider position="absolute" top="30%" left="10%">
            <Heading color={colors.whiteNormal} fontSize={2} fontFamily="OpenSans-Regular" align="start">
              Let's Talk
            </Heading>
            <Flex>
              <Box mr={5}>
                <form onSubmit={submitData}>
                  <Flex mt={4}>
                    <Box mr={5}>
                      <TextField value={fullname} placeholder="Full Name" onChange={e => setFullName(e.target.value)} />
                    </Box>
                    <Box mr={2}>
                      <TextField value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </Box>
                  </Flex>
                  <Flex mt={5}>
                    <TextField value={message} placeholder="Message" fullWidth mt={5} onChange={e => setMessage(e.target.value)} />
                  </Flex>
                  <Button text="Save Data" padding={15} color={colors.blue} margin="1rem 0 0 0 " backgroundColor={colors.whiteNormal} />
                </form>
              </Box>
            </Flex>
          </Divider>
        </Section>
      </Layout>
    </React.Fragment >
  )
}
