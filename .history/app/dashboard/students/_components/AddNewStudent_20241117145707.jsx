"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add New Students</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student: </DialogTitle>
            <DialogDescription>
                <div className="py-">
                    <label className="py-5 mb-5">Student Name</label>
                    <Input placeholder="Ex. Muheeb Al-Hamali" ></Input>
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
