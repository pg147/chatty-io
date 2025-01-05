// Global States
import { useChatStore } from "../store/useChatStore"

// Components
import Sidebar from "../components/Sidebar";
import ChatInterface from "../components/ChatInterface";
import NoSelectedUser from "../components/NoSelectedUser";

export default function HomePage() {
  const { selectedUser } = useChatStore();

  return (
    <div className="w-full h-screen md:flex">
      {/* Sidemenu - Users */}
      <div className="h-screen w-full md:w-[30%] lg:w-[20%]">
        <Sidebar />
      </div>

      {/* Chat Interface */}
      <div className="md:w-[70%] lg:w-[80%] bg-light hidden md:flex flex-col items-center justify-center">
        {selectedUser ? <ChatInterface /> : <NoSelectedUser /> }
      </div>
    </div>
  )
}
