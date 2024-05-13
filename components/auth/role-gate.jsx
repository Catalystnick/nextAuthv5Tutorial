"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import React from "react";
import { FormError } from "../form-error";

export default function RoleGate({ children, allowedRole }) {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content" />
    );
  }

  return <> {children}</>;
}
