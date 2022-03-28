import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="100%" maxW="900px">
        <ModalBody
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="0"
        >
          <Image src={imgUrl} maxH="600px" maxW="900px" />
        </ModalBody>
        <ModalFooter background="pGray.800" w="100%">
          <Link isExternal href={imgUrl} mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
