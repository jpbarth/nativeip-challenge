import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Customer } from "../pages/Customer";

function CustomRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit/:customerId" element={<Customer />} />
      </Routes>
    </>
  );
}

export { CustomRouter };
