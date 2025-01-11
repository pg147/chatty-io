// Global States
import { useChatStore } from "../store/useChatStore"
import { useHelperStore } from "../store/useHelperStore";

// Components
import Sidebar from "../components/Sidebar";
import ChatInterface from "../components/ChatInterface";
import NoSelectedUser from "../components/NoSelectedUser";

export default function HomePage() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { isChatOpen, closeChat } = useHelperStore();

  const isMobile = window.innerHeight < 768;

  const handleCloseChat = () => {
    setSelectedUser(null); // Clear the selected user
    closeChat();
  }

  return (
    <div className="w-full h-screen md:flex">
      {/* Sidemenu - Users */}
      <div className={`h-screen w-full md:w-[30%] lg:w-[20%] ${selectedUser && isChatOpen && isMobile ? 'hidden' : 'block'}`}>
        <Sidebar />
      </div>

      {/* Chat Interface */}
      {isMobile ? (
        <div className={`${selectedUser && isChatOpen ? 'block' : 'hidden'}`}>
          <ChatInterface onClose={handleCloseChat} />
        </div>
      ) : (
        <div className="md:w-[70%] lg:w-[80%] h-screen hidden md:block ">
          {selectedUser ? (
            <div className="">
              <ChatInterface onClose={handleCloseChat} />
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
