import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const getOAuthButton = (buttonText: string, imageUrl: string = '') => {
  return (<Button
    backgroundColor='blue.500'
    color='white'
    mt={2}
    _hover={{
      opacity: .9,
    }}>
      {imageUrl !== '' && <Image src={imageUrl} height='20px' alt="Google logo" />}
      {buttonText}
    </Button>);
};

const OAuthButtons:React.FC = () => {
  
  return (
    <Flex direction='column' width='100%' mb={4}>
      {getOAuthButton('Continue with Google', '/images/googlelogo.png')}
    </Flex>
  )
}
export default OAuthButtons;