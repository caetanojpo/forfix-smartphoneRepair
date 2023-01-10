
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { BannerContainer } from "./Banner.styled";

const Banner = () => {
    return(
        <BannerContainer>
          <Box display='flex'  h='100%'  flexDir='column' justifyContent='space-evenly' padding={{base:'0px 20px', lg:'0px 50px'}}>
            <Box display='flex' flexDir='column' alignItems={{base:'center'}} textAlign='center' gap={{base:'10px'}}>
            <Text fontSize={{base:'32px', md:'40px', lg:'52px'}} fontWeight='700'>SEU APARELHO QUEBROU?</Text>
            <Text fontSize={{base:'0px', lg:'32px'}} >NÓS PODEMOS CONSERTA-LO!</Text>
            <Button className="btn" bg='black' color='white' w={{base:"100%", lg:'200px'}} h={{base:'60px'}}><Link href="/">Entre em contato agora!</Link></Button>
            </Box>
            <Box    textAlign='justify'
           display={{base:'none', lg:'flex'}} flexDir='column' gap={{base:'10px'}}>
            <Text fontSize={{base:'20px'}} fontWeight='700'>ESPECIALISTAS EM CONSERTOS ELETRÔNICOS</Text>
            <Text w={{lg:'50%'}}  textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates earum, ea culpa nihil iusto blanditiis, veritatis magnam vero eligendi possimus delectus a omnis? Ab eum harum sint modi minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolore explicabo hic id a ea fugit commodi odit eum numquam tempora doloremque inventore alias neque, non ex libero dolorem dignissimos!
      
            </Text>
            <h1>FORFIX - Assistência Técnica</h1>
            </Box>
          </Box>
          <Box display={{base:'none', md:'block'}} w={{base:'0px', lg:'100px'}} marginLeft={{base:'0px', md:'350px', lg:'350px'}}>

          </Box>
      
        </BannerContainer>
    )
}


export default Banner;