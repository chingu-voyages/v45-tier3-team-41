"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const form = useForm();

  const onSubmit = () => {};

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 flex flex-row justify-around items-baseline bg-dark-2 rounded-xl shadow-lg py-4 mb-5">
      <Input
        id="userSearch"
        className="account-form_input no-focus w-3/4"
        placeholder="Enter the name to search"
      />
      {/* Submitting Button For the Form */}
      <Button className="bg-primary-500 w-full py-6 w-1/6" type="submit">
        Go
      </Button>
    </div>
  );
}
