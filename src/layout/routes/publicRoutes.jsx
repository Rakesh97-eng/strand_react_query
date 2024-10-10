import ChatUI from "../../pages/user/chatui";
import EditSuggestion from "../../pages/user/editSuggestion";
import ResponseUi from "../../pages/user/responseui";
import Layout from "../navLayout";

export const publicRoutes = [
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        index :true,
        element: <ChatUI />,
      },
      {
        path: "/response/:id",
        element: <ResponseUi />,
      },
      {
        path: "/edit",
        element: <EditSuggestion />,
      },
    ],
  },
];
