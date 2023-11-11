import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  onNewMessage: () => void;
}

const ThankYou: FC<Props> = ({ onNewMessage }) => {
  const router = useRouter();
  return (
    <div className="text-center">
      <p className="text-sec-text-color text-[1.625rem] font-medium mb-[0.62rem]">
        Thank you! 🤘
      </p>
      <p className="text-[1.125rem] font-medium">
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <Button
        onClick={onNewMessage}
        className="mt-[2.31rem] laptop:py-[0.625rem] laptop:px-[0.875rem] text-sec-text-color bg-light-grey text-[0.875rem] rounded-lg hover:bg-transparent hover:border-border-color border border-light-grey box-border"
      >
        send-new-message
      </Button>
    </div>
  );
};

export default ThankYou;
