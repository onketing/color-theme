import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import ClientShowcase from "./components/ClientShowcase.jsx";
import Landing from "./components/Landing.jsx";
import { getClient } from "./data/clients.js";

/** /:slug 라우트 — 업체를 찾으면 쇼케이스, 없으면 not-found 랜딩 */
function ClientRoute() {
  const { slug } = useParams();
  const client = getClient(slug);
  if (!client) return <Landing notFound />;
  return <ClientShowcase client={client} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:slug" element={<ClientRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
