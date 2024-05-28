import { useToast } from "@chakra-ui/react";
import { FirestoreServices } from "./types";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/config/firebase";

const useFirestore = (): FirestoreServices => {
  const toast = useToast();
  return {
    addContactMessage: async (params) => {
      try {
        await addDoc(collection(firestore, "contact-me"), params);
        toast({
          description: "Thank you for your message!",
        });
      } catch (error) {
        toast({
          description: "Something went wrond, please try again later",
        });
      }
    },
  };
};

export default useFirestore;
