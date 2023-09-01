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
import { Textarea } from "@/components/ui/textarea";
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

          {/* Start Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="account-form_input no-focus"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End Email Field */}

          {/* Start Topic Field */}
                    <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="account-form_input no-focus"
                    placeholder="Enter the topic of your inquiry"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End topic Field */}

          {/* Start inquiry Field */}
                    <FormField
            control={form.control}
            name="inquiry"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="account-form_input no-focus"
                    placeholder="Enter your inquiry"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End inquiry Field */}

          {/* Submitting Button For the Form */}
          <Button className="bg-primary-500 w-full py-6" type="submit">
            Submit your inquiry
          </Button>
          {/* End submitting button */}

        
        </form>
      </Form>
    </div>
  );
}
