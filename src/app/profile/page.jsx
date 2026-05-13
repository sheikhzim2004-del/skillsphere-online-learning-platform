"use client";

import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  console.log(user);
  return (
    <div className=' flex items-center justify-center  p-8 '>
      <Card className='w-full max-w-md bg-[#0d1f1f] border border-teal-500/30 shadow-lg shadow-teal-500/20 rounded-2xl mx-auto  p-20 flex flex-col items-center'>
        <Avatar className='w-40 h-40 rounded-full border-4 border-teal-400 object-cover' >
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer" />
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <p className="text-white text-2xl font-semibold mt-4">
          {user?.name}
        </p>
        <p className="text-gray-400 mt-2">
          {user?.email}
        </p>
        <UpdateUserModal></UpdateUserModal>
      </Card>
    </div>
  );
};

export default ProfilePage;