// Global States
import { useChatStore } from "../store/useChatStore"
import { useHelperStore } from "../store/useHelperStore";

// Components
import Sidebar from "../components/Sidebar";
import ChatInterface from "../components/ChatInterface";
import NoSelectedUser from "../components/NoSelectedUser";

export default function HomePage() {
  const { selectedUser } = useChatStore();
  const { isChatOpen } = useHelperStore();

  return (
    <div className="w-full h-screen md:flex">
      {/* Sidemenu - Users */}
      <div className={`h-screen w-full md:w-[30%] lg:w-[20%] ${selectedUser && isChatOpen && window.innerWidth < 768 ? 'hidden' : 'block'}`}>
        <Sidebar />
      </div>

      {/* Chat Interface */}
      {window.innerHeight < 768 ? (
        <div className={`${selectedUser && isChatOpen ? 'block' : 'hidden'}`}>
          <ChatInterface />
        </div>
      ) : (
        <div className="md:w-[70%] lg:w-[80%] h-screen hidden md:block ">
          {selectedUser ? (
            <div className="">
              <ChatInterface />
            </div>
          ) : (
            <div className="md:flex flex-col h-screen items-center justify-center bg-light">
              <NoSelectedUser />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
