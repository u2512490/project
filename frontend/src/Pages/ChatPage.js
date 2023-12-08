import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;        
        
        /* In order to use await keyword you need to make an async()
        
        async() should always be used with the try catch block bcoz if not it can cause unhandled promise rejections or unexpected results.
        */
       //chats = used to display the data.
       //setChats = change the value of chats variable.
       
       //This will fetch the api and {data} -> this will destructure the data removing the curly braces will structure the data.
       
//Completed