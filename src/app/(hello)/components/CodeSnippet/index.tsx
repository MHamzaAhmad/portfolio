import { Card, CardBody } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
     content: string;
 }

const CodeSnippet: FC<Props> = ({content}) => {
     return <>
          <Card className="w-[80%] bg-background-color h-[15rem] my-[1.12rem] opacity-50">
               <CardBody>
                    {content}
               </CardBody>
     </Card>
     </>
}

export default CodeSnippet;
