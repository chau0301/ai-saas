"use client";

import { useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
  const { data: session, status } = useSession()
  const user = session?.user || {};

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.image || '/guest.png'} />
      <AvatarFallback>
        {user?.name?.charAt(0) || 'A'}
      </AvatarFallback>
    </Avatar>
  );
};