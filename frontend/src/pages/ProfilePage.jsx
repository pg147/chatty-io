import { LucideUser2, LucideMail, LucideCamera, Loader2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";

export default function ProfilePage() {
  const { authUser, isUpdatingProfile, updateProfileImage } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfileImage({ profilePic: base64Image });
    }
  }

  return (
    <div className="px-4 lg:px-0 mt-14 lg:mt-0 h-screen w-full flex flex-col items-center justify-center">
      <div className="w-full lg:max-w-2xl bg-white shadow-intense rounded-3xl px-4 lg:px-7">
        <div className="my-4 lg:my-7">
          {/* Headers */}
          <div className="size-fit mx-auto mt-7 lg:mt-0">
            <h1 className="text-center text-xl font-semibold">Profile</h1>
            <p className="font-medium text-sm mt-2">Your profile information</p>
          </div>

          {/* Profile image */}
          <div className={`mt-9 relative size-fit mx-auto rounded-full border-2 border-stroke ${authUser.profilePic || selectedImg ? 'p-0' : 'p-6'}`}>
            <img
              src={ selectedImg || authUser.profilePic || "/avatar.svg"}
              alt="avatar"
              className={`object-cover rounded-full ${ selectedImg || authUser.profilePic ? 'size-32 ' : 'size-20' }`}
            />

            {/* Update Button */}
            <label className={`absolute bottom-0 right-0 size-fit p-2 flex items-center justify-center bg-primary lg:hover:scale-[1.1] transition-all duration-200 ease-in-out cursor-pointer rounded-full ${isUpdatingProfile ? 'animate-pulse pointer-events-none' : ''}`}>
              <LucideCamera className="size-5 text-white" />
              <input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* CTA */}
          <div className="size-fit mx-auto mt-4">
            {isUpdatingProfile ? (
              <div className="flex gap-x-3 items-center justify-center text-sm font-semibold mt-5">
                <Loader2 className="size-5 text-primary animate-spin" />
                <p>Uploading</p>
              </div>
            ) : (
              <p>Click the camera icon to update your profile picture</p>
            )}
          </div>

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
      <div className="mt-6 w-full lg:max-w-2xl bg-white shadow-intense rounded-3xl px-4 lg:px-7">
        <div className="my-4 lg:my-7">
          {/* Headers */}
          <div className="size-fit mt-7 lg:mt-0">
            <h1 className="text-xl font-semibold">Account Information</h1>
          </div>

          <hr className="w-full my-4" />

          <div className="w-full grid gap-y-3">
            <div className="w-full flex items-center justify-between">
              <label>Member since</label>
              <p>{authUser.createdAt.slice(0, 10)}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <label>Account status</label>
              <div className="flex items-center gap-x-3">
                <div className="rounded-full size-2.5 animate-pulse bg-green-700"></div>
                <h1>Active</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
