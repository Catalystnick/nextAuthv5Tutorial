import React from "react";
import Header from "@/components/auth/header";
import BackButton from "@/components/auth/backButton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import CardWrapper from "./cardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex w-full items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}
