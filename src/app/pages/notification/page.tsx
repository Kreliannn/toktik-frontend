"use client"
import Notif from "./components/notif"
import { NavbarBottom } from "@/app/components/navbarComponents/navbarBottom"
import { NavbarSide } from "@/app/components/navbarComponents/navbarSide"
import axios from "@/app/hooks/api"
import { useQuery } from "@tanstack/react-query"
import { notificationInterface } from "@/app/interface/notification"
import LoadingPage from "@/app/components/loading/loading"
import useUserStore from "@/app/store/userStore"
import ErrorPage from "@/app/components/unAuthorize/errorPage"


const NotificationPage = () => {

  const user = useUserStore((state) => state.user)



    const { data, isLoading } = useQuery({
        queryKey : ["notif"],
        queryFn : () => axios.get("/notification"),
        refetchInterval : 5000
    })


    if(isLoading) return <LoadingPage />
    if(!user.fullname) return <ErrorPage />
    const notifications: notificationInterface[] = data?.data

  return (
    <div className="h-dvh w-full grid grid-cols-12">
      <div className="bg-gray-200 p-4 col-span-0 hidden md:col-span-3 md:block">
        <NavbarSide />
      </div>
      <div className="bg-gray-800 col-span-12 md:col-span-9">
        <div className=" mx-auto bg-gray-100 min-h-screen">
          <header className="bg-white p-4 shadow">
            <h1 className="text-xl font-bold">Notifications</h1>
          </header>
          <main className="p-4">
            {notifications?.map((notification, index) => (
                <Notif key={index} notification={notification} />
            ))}
          </main>
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
}

export default NotificationPage

