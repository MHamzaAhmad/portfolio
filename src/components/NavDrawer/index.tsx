import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Flex,
  Text,
  Box,
  DrawerFooter,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import MobileFooter from "../MobileFooter";
import { useRouter } from "next/navigation";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  link: string;
}

const NavDrawer = ({ isOpen, onClose }: NavDrawerProps) => {
  const router = useRouter();
  const menuItems: MenuItem[] = [
    { label: "_hello", link: "/" },
    { label: "_about-me", link: "/about-me" },
    { label: "_projects", link: "/projects" },
    { label: "_contact-me", link: "/contact-me" },
  ];

  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  const handleMenuItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    router.push(item.link);
    onClose();
  };

  return (
    <>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bg="brand.back">
          <DrawerCloseButton
            size="lg"
            fontSize="md"
            fontWeight="bold"
            _active={{ bg: "transparent" }}
          />
          <DrawerHeader
            borderBottomWidth="1px"
            borderColor="brand.border"
            fontSize="md"
            fontWeight="big"
          >
            <Flex justifyContent="start" alignItems="center">
              <Text>hamza-ahmad</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody px={0}>
            <Box>
              {menuItems.map((item, index) => (
                <Box
                  key={index}
                  onClick={() => handleMenuItemClick(item)}
                  cursor="pointer"
                  borderBottomWidth="1px"
                  borderBottomColor="brand.border"
                  py="1.06rem"
                  px="1.12rem"
                  bg={selectedItem === item ? "gray.100" : "transparent"}
                  _hover={{ bg: "gray.100" }}
                >
                  <Text fontSize="md" color="brand.white">
                    {item.label}
                  </Text>
                </Box>
              ))}
            </Box>
          </DrawerBody>
          <DrawerFooter padding={0}>
            <MobileFooter />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
