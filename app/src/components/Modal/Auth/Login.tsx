import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {
  
};

const Login:React.FC<LoginProps> = () => {
  const setAuthModalSate = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  // Firebase logic
  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input  
        required
        name='email'
        placeholder='email'
        type='email'
        mb={2}
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50' />
      <Input
        required
        name='password'
        placeholder='password'
        type='password'
        mb={2}
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50' />
      <Button
        width={'100%'}
        height={'36px'}
        mt={2}
        mb={2}
        type={'submit'}
        backgroundColor='blue.500'
        color='white'
        _hover={{
          opacity: .9,
        }}>
        Log In
      </Button>
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr={1}>New here?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() => { setAuthModalSate((prev) => ({
            ...prev,
            view: 'signup',
          }))}}>
            SIGN UP
          </Text>
      </Flex>
    </form>
  );
}
export default Login;