"use client"
import Link from "next/link"
import { NavbarSide } from "@/app/components/navbarComponents/navbarSide"
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom"
import { Avatar, Button } from "@mui/material"
import { Person, PersonAdd } from "@mui/icons-material"
import axios from "@/app/hooks/api"
import { useQuery } from "@tanstack/react-query"
import useUserStore from "@/app/store/userStore"
import ErrorPage from "@/app/components/unAuthorize/errorPage"
import LoadingPage from "@/app/components/loading/loading"

import { useState, useEffect } from "react"


export default function FollowingPage() {
    const user = useUserStore((state) => state.user);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const { data, isLoading } = useQuery({
        queryKey: ["followings"],
        queryFn: () => axios.get("/account/following"),
        enabled: hydrated && !!user.fullname, 
    });

    
    if (!hydrated || isLoading) return <LoadingPage />;

    const following = data?.data.following;
    const followers = data?.data.followers;

    return (
        <div className="h-dvh w-full grid grid-cols-12">
            <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3 md:block">
                <NavbarSide />
            </div>
            <div className="col-span-12 md:col-span-9">
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-6">Your Connections</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Followers</h2>
                            <ul className="space-y-4 overflow-auto h-96">
                                {followers?.map((user) => (
                                    <Link href={`/pages/profile/${user?._id}`} key={user?._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                                        <div className="flex items-center space-x-4">
                                            <Avatar src={user?.profile} alt={user?.fullname} />
                                            <span className="font-medium">{user?.fullname}</span>
                                        </div>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Following</h2>
                            <ul className="space-y-4 overflow-auto h-96">
                                {following?.map((user) => (
                                    <Link href={`/pages/profile/${user?._id}`} key={user?._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                                        <div className="flex items-center space-x-4">
                                            <Avatar src={user?.profile} alt={user?.fullname} />
                                            <span className="font-medium">{user?.fullname}</span>
                                        </div>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <NavbarBottom />
        </div>
    );
}