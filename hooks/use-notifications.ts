"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"

interface Notification {
  id: string
  title: string
  message: string
  type: "booking" | "payment" | "system" | "review"
  read: boolean
  time: string
  createdAt: Date
}

export function useNotifications() {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)

  // Mock notifications for development
  const mockNotifications: Notification[] = [
    {
      id: "1",
      title: "New Booking Received",
      message: "You have a new booking for Cape Coast Heritage Tour",
      type: "booking",
      read: false,
      time: "2 minutes ago",
      createdAt: new Date(Date.now() - 2 * 60 * 1000),
    },
    {
      id: "2",
      title: "Payment Received",
      message: "Payment of GH₵ 450 has been received for your tour",
      type: "payment",
      read: false,
      time: "15 minutes ago",
      createdAt: new Date(Date.now() - 15 * 60 * 1000),
    },
    {
      id: "3",
      title: "New Review",
      message: "Sarah Johnson left a 5-star review for your tour",
      type: "review",
      read: true,
      time: "1 hour ago",
      createdAt: new Date(Date.now() - 60 * 60 * 1000),
    },
    {
      id: "4",
      title: "Profile Verification",
      message: "Your business profile has been successfully verified",
      type: "system",
      read: true,
      time: "2 hours ago",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      id: "5",
      title: "Booking Cancelled",
      message: "A booking for Mole National Park Safari has been cancelled",
      type: "booking",
      read: true,
      time: "3 hours ago",
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    },
  ]

  useEffect(() => {
    if (user) {
      // Load notifications from localStorage or API
      const savedNotifications = localStorage.getItem(`notifications_${user.id}`)
      if (savedNotifications) {
        const parsed = JSON.parse(savedNotifications)
        setNotifications(parsed)
      } else {
        // Use mock notifications for development
        setNotifications(mockNotifications)
        localStorage.setItem(`notifications_${user.id}`, JSON.stringify(mockNotifications))
      }

      // Simulate real-time notifications
      const interval = setInterval(() => {
        if (Math.random() > 0.95) {
          // 5% chance every 5 seconds to get a new notification
          addNewNotification()
        }
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [user])

  useEffect(() => {
    // Update unread count
    const unread = notifications.filter((n) => !n.read).length
    setUnreadCount(unread)
  }, [notifications])

  const addNewNotification = () => {
    const newNotificationTemplates = [
      {
        title: "New Booking Request",
        message: "You have a new booking request for your tour",
        type: "booking" as const,
      },
      {
        title: "Payment Received",
        message: `Payment of GH₵ ${Math.floor(Math.random() * 500 + 100)} has been received`,
        type: "payment" as const,
      },
      {
        title: "New Message",
        message: "You have a new message from a customer",
        type: "system" as const,
      },
      {
        title: "Review Received",
        message: "A customer left a new review for your service",
        type: "review" as const,
      },
    ]

    const template = newNotificationTemplates[Math.floor(Math.random() * newNotificationTemplates.length)]
    const newNotification: Notification = {
      id: Date.now().toString(),
      title: template.title,
      message: template.message,
      type: template.type,
      read: false,
      time: "Just now",
      createdAt: new Date(),
    }

    setNotifications((prev) => {
      const updated = [newNotification, ...prev].slice(0, 20) // Keep only latest 20
      if (user) {
        localStorage.setItem(`notifications_${user.id}`, JSON.stringify(updated))
      }
      return updated
    })
  }

  const markAsRead = (notificationId: string) => {
    setNotifications((prev) => {
      const updated = prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n))
      if (user) {
        localStorage.setItem(`notifications_${user.id}`, JSON.stringify(updated))
      }
      return updated
    })
  }

  const markAllAsRead = () => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }))
      if (user) {
        localStorage.setItem(`notifications_${user.id}`, JSON.stringify(updated))
      }
      return updated
    })
  }

  const deleteNotification = (notificationId: string) => {
    setNotifications((prev) => {
      const updated = prev.filter((n) => n.id !== notificationId)
      if (user) {
        localStorage.setItem(`notifications_${user.id}`, JSON.stringify(updated))
      }
      return updated
    })
  }

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    addNewNotification,
  }
}
