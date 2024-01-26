import { Routes, Route, Navigate } from "react-router";
import TestPage from "@/views/Test/TestPage";
import GeneralErrorPage from "@/views/Error/GeneralErrorPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/test" replace={true} />} />

      {/* <Route path="/project_manager/:id?" element={<ProjectManager />} /> */}

      <Route path="/test" element={<TestPage />} />

      <Route path="*" element={<GeneralErrorPage />} />
    </Routes>
  );
};
