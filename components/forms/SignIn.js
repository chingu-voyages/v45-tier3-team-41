"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function SignIn() {
  const form = useForm();

  const onSubmit = () => {};

  return (
    <div>
      {/* Calling the shadcn form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Start username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="account-form_input no-focus"
                    placeholder="Enter your username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End username Field */}

          {/* Start Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    className="account-form_input no-focus"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End Password Field */}

          {/* Submitting Button For the Form */}
          <Button className="bg-primary-500 w-full py-6" type="submit">
            Sign in
          </Button>

          {/* Text that ask you if you to sign up */}
          <p className="text-light-1 text-center">
            Don't you have an account?{" "}
            <Link className="text-primary-500 font-medium" href="/sign-up">
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
