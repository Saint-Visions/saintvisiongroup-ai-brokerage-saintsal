import React from "react";
import { builder, BuilderComponent } from "@builder.io/react";

// Only initialize if API key exists
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
}

export async function generateStaticParams() {
  try {
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
      return [];
    }
    const pages = await builder.getAll("page", {
      options: { noTargeting: true },
    });
    return pages.map((page) => ({
      page: page.data?.url?.slice(1)?.split("/") || [],
    }));
  } catch (error) {
    console.warn("Failed to generate static params from Builder.io:", error);
    return [];
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string[] }>;
}) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams?.page?.join("/") || "");
  const page = await builder.get("page", { url: urlPath });

  return (
    <>
      {page ? (
        <BuilderComponent model="page" content={page} />
      ) : (
        <div>404 Not Found</div>
      )}
    </>
  );
}
