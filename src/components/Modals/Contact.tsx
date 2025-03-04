"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [reason, setReason] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show success
    setSubmitted(true)
    setIsSubmitting(false)

    // Close modal after showing success message
    setTimeout(() => {
      setOpen(false)
      // Reset form after modal is closed
      setTimeout(() => {
        setEmail("")
        setCompany("")
        setReason("")
        setMessage("")
        setSubmitted(false)
      }, 300)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold w-full sm:w-auto">
      Contact Us
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Get in touch</DialogTitle>
              <DialogDescription>
                Fill out the form below and our team will get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-left">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company" className="text-left">
                  Company
                </Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e:any) => setCompany(e.target.value)}
                  placeholder="Your company name"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reason" className="text-left">
                  Reason for contact
                </Label>
                <Select value={reason} onValueChange={setReason} required>
                  <SelectTrigger id="reason">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-left">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help..."
                  className="col-span-3"
                  rows={4}
                  required
                />
              </div>
              <DialogFooter>
                <button type="submit" disabled={isSubmitting} className="bg-[green] text-[white] py-2 px-2 ">
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-lg font-medium">Thanks for reaching out!</h3>
            <p className="text-muted-foreground">We've received your message and will get back to you shortly.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

