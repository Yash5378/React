import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { Paperclip, Mic, CornerDownLeft } from "lucide-react";

function Message() {
  const [message, setMessage] = useState("");
  const userMessege = (e) => {
    const newMessege = e.target.value;
    setMessage(newMessege);
  };

  const onButtonClick = () => {
    console.log(message);
  };
  return (
    <TooltipProvider>
   
    </TooltipProvider>
  );
}

export default Message;
