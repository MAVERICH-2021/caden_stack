import { Routes, Route, Navigate } from "react-router";
import TestPage from "@/views/Test/TestPage";
import GeneralErrorPage from "@/views/Error/GeneralErrorPage";
import HomePage from "./views/Home/HomePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} />

      {/* <Route path="/project_manager/:id?" element={<ProjectManager />} /> */}
      <Route path="/home" element={<HomePage />} />

      <Route path="/test" element={<TestPage />} />

      <Route path="*" element={<GeneralErrorPage />} />
    </Routes>
  );
};
