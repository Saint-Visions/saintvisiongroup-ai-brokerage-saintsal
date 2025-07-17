"use client";

import { builder } from "@builder.io/react";
import Hero from "./Hero";
import CTA from "./CTA";
import Footer from "./Footer";
import FormSection from "./FormSection";
import InvestmentSandbox from "./InvestmentSandbox";

// Initialize Builder.io with API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Register Hero Component
builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "SaintSAL™ - AI-Powered Real Estate Brokerage",
      helperText: "Main hero title",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "Transform your real estate investments with AI-driven automation, advanced analytics, and seamless CRM integration. Join the future of property investment.",
      helperText: "Hero subtitle/description",
    },
    {
      name: "primaryButtonText",
      type: "string",
      defaultValue: "Start Your Investment Journey",
      helperText: "Text for primary CTA button",
    },
    {
      name: "primaryButtonAction",
      type: "string",
      enum: ["application", "sandbox", "contact"],
      defaultValue: "application",
      helperText: "Action for primary button",
    },
    {
      name: "secondaryButtonText",
      type: "string",
      defaultValue: "Watch Demo",
      helperText: "Text for secondary button",
    },
    {
      name: "backgroundVideo",
      type: "file",
      allowedFileTypes: ["mp4", "webm", "mov"],
      helperText: "Background video (optional)",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      helperText: "Background image (fallback if no video)",
    },
    {
      name: "showVideo",
      type: "boolean",
      defaultValue: true,
      helperText: "Show video if available",
    },
  ],
});

// Register CTA Component
builder.registerComponent(CTA, {
  name: "CTA",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Ready to Transform Your Real Estate Investments?",
      helperText: "CTA section title",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Join thousands of investors already using SaintSAL™ to maximize their returns with AI-powered insights and automation.",
      helperText: "CTA description",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Get Started Today",
      helperText: "CTA button text",
    },
    {
      name: "buttonStyle",
      type: "string",
      enum: ["primary", "secondary", "outline"],
      defaultValue: "primary",
      helperText: "Button style variant",
    },
    {
      name: "action",
      type: "string",
      enum: ["modal", "redirect", "scroll"],
      defaultValue: "modal",
      helperText: "What happens when button is clicked",
    },
    {
      name: "redirectUrl",
      type: "string",
      helperText: "URL to redirect to (if action is redirect)",
    },
    {
      name: "scrollTarget",
      type: "string",
      helperText: "CSS selector to scroll to (if action is scroll)",
    },
    {
      name: "backgroundColor",
      type: "string",
      defaultValue: "bg-gradient-to-r from-blue-600 to-purple-600",
      helperText: "Background color/gradient class",
    },
    {
      name: "textColor",
      type: "string",
      defaultValue: "text-white",
      helperText: "Text color class",
    },
    {
      name: "showForm",
      type: "boolean",
      defaultValue: true,
      helperText: "Show application form in modal",
    },
  ],
});

// Register Footer Component
builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "companyName",
      type: "string",
      defaultValue: "SaintSAL™",
      helperText: "Company name",
    },
    {
      name: "tagline",
      type: "string",
      defaultValue: "AI-Powered Real Estate Brokerage",
      helperText: "Company tagline",
    },
    {
      name: "showSocialLinks",
      type: "boolean",
      defaultValue: true,
      helperText: "Display social media links",
    },
    {
      name: "showContactInfo",
      type: "boolean",
      defaultValue: true,
      helperText: "Display contact information",
    },
    {
      name: "backgroundColor",
      type: "string",
      defaultValue: "bg-gray-900",
      helperText: "Footer background color class",
    },
    {
      name: "textColor",
      type: "string",
      defaultValue: "text-gray-300",
      helperText: "Footer text color class",
    },
    {
      name: "accentColor",
      type: "string",
      defaultValue: "text-blue-400",
      helperText: "Footer accent color class",
    },
  ],
});

// Register FormSection Component
builder.registerComponent(FormSection, {
  name: "FormSection",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Start Your Investment Application",
      helperText: "Form section title",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "Take the first step towards maximizing your real estate returns with our AI-powered platform",
      helperText: "Form section subtitle",
    },
    {
      name: "formType",
      type: "string",
      enum: ["application", "contact", "consultation", "custom"],
      defaultValue: "application",
      helperText: "Type of form to display",
    },
    {
      name: "showSteps",
      type: "boolean",
      defaultValue: true,
      helperText: "Show multi-step progress indicator",
    },
    {
      name: "backgroundColor",
      type: "string",
      defaultValue: "bg-gray-50",
      helperText: "Section background color class",
    },
    {
      name: "textColor",
      type: "string",
      defaultValue: "text-gray-900",
      helperText: "Section text color class",
    },
    {
      name: "accentColor",
      type: "string",
      defaultValue: "text-blue-600",
      helperText: "Section accent color class",
    },
  ],
});

// Register InvestmentSandbox Component
builder.registerComponent(InvestmentSandbox, {
  name: "InvestmentSandbox",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Investment Sandbox",
      helperText: "Sandbox section title",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "Analyze deals, model scenarios, and execute high-return investments with precision",
      helperText: "Sandbox section subtitle",
    },
    {
      name: "showCalculator",
      type: "boolean",
      defaultValue: true,
      helperText: "Show the investment calculator",
    },
    {
      name: "showComparison",
      type: "boolean",
      defaultValue: true,
      helperText: "Show strategy comparison tools",
    },
    {
      name: "backgroundColor",
      type: "string",
      defaultValue: "bg-white",
      helperText: "Section background color class",
    },
  ],
});

// Export for use in other components
export { Hero, CTA, Footer, FormSection, InvestmentSandbox };
