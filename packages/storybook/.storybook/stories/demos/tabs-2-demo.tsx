import {Tabs} from "@heroui/react";
import {Mail, MessageCircle} from "lucide-react";
import React from "react";

export function TabsDemo2() {
  return (
    <Tabs className="w-[256px]">
      <Tabs.ListContainer>
        <Tabs.List aria-label="Options">
          <Tabs.Tab className="gap-1.5" id="chats">
            <MessageCircle />
            <span>Chats</span>
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab className="gap-1.5" id="emails">
            <Mail />
            <span>Emails</span>
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
    </Tabs>
  );
}
