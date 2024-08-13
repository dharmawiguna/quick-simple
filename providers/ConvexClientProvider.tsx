"use client";
import Loading from "@/components/ui/shared/Loading";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey={publishableKey!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
