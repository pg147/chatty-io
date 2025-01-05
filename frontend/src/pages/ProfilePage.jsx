import { LucideUser2, LucideMail, LucideCamera } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

export default function ProfilePage() {
  const { authUser } = useAuthStore();

  console.log(authUser);

  return (
    <div className="px-4 lg:px-0 h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full lg:max-w-2xl bg-white shadow-intense rounded-3xl px-4 lg:px-7">
        <div className="my-4 lg:my-7">
          {/* Headers */}
          <div className="size-fit mx-auto mt-7 lg:mt-0">
            <h1 className="text-center text-xl font-semibold">Profile</h1>
            <p className="font-medium text-sm mt-2">Your profile information</p>
          </div>

          {/* Profile image */}
          <div className="mt-9 relative size-fit mx-auto rounded-full border-2 border-stroke">
            {authUser.profilePic ? (
              <img
                src=""
                alt={authUser.name + "_profile_photo"}
                className="size-16"
              />
            ) : (
              <>
                <div className="p-6">
                  <LucideUser2 className="size-12 text-primary" />
                </div>
                <div className="absolute bottom-0 right-0 size-fit p-2 flex items-center justify-center bg-primary hover:bg-primary/90 cursor-pointer rounded-full">
                  <LucideCamera className="size-4 text-white" />
                </div>
              </>
            )}
          </div>

          <p className="text-center text-sm font-semibold mt-5">Click the camera icon to update your profile picture</p>

          {/* User details */}
          <div className="mt-6 lg:mt-9 grid gap-y-6 w-full">
            {/* Input field - Full Name */}
            <div className="grid gap-y-3">
              <div className="flex items-center gap-x-3">
                <LucideUser2 className="size-5 text-primary " />
                <label className="font-medium">Full name</label>
              </div>
              <input
                type="text"
                readOnly
                disabled
                defaultValue={authUser.name}
                className="h-[55px] cursor-not-allowed w-full px-5 border border-gray-300 rounded-xl outline-primary"
              />
            </div>

            {/* Input field - Email */}
            <div className="grid gap-y-3">
              <div className="flex items-center gap-x-3">
                <LucideMail className="size-5 text-primary " />
                <label className="font-medium">Email</label>
              </div>
              <input
                type="email"
                readOnly
                disabled
                defaultValue={authUser.email}
                className="h-[55px] cursor-not-allowed w-full px-5 border border-gray-300 rounded-xl outline-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Account information */}
      <div className="w-full lg:max-w-2xl bg-white shadow-intense rounded-3xl px-4 lg:px-7">
        <div className="my-4 lg:my-7">
          {/* Headers */}
          <div className="size-fit mx-auto mt-7 lg:mt-0">
            <h1 className="text-center text-xl font-semibold">Account Information</h1>
          </div>
        </div>
      </div>
      
    </div>
  )
}
