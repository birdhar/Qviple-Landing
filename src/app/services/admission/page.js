"use client";

import React from "react";
import AdmissionMgt from "@/components/Services/ServiceDetails/AdmissionMgt/AdmissionMgt";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function Admission() {
  return (
    <>
      <Provider store={store}>
        <AdmissionMgt />
      </Provider>
    </>
  );
}

export default Admission;
