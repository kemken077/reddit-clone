/* eslint-disable react/no-unescaped-entities */
import { authModalState } from '@/atoms/authModalAtom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal:React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setModalState(prev => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody 
            display='flex'
            flexDirection='column'
            alignItems='center' 
            justifyContent='center'
            pb={6}>
              <Flex direction='column' align='center' justify='center' width='70%'>
                <OAuthButtons />
                <AuthInputs />
                {/* <ResetPassword /> */}
              </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AuthModal;