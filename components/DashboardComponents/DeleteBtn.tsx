"use client";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Delete({ id, resourceName }:any) {
  const router = useRouter();
  const handleDelete = async () => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure you want to delete ?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

            try {
              const response = await fetch(
                `${baseUrl}/api/${resourceName}/${id}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              if (response.ok) {
                window.location.reload();
                toast.success("Deleted successfully");
              } else {
                toast.error("Failed to Deleted");
              }
            } catch (error) {
              console.error("Error:", error);
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <button onClick={handleDelete} className="cursor-pointer text-xs font-bold sm:text-sm md:text-base text-red-600 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    </button>
  );
}
