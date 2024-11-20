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
import { Input } from "@/components/ui/input";

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
              <div className="py-2">
                <label className="py-5 mb-5">Full Name</label>
                <Input placeholder="Ex. Muheeb Al-Hamali"></Input>
              </div>
              <div>
                <label>Select Grade</label>
                {/* Add grade options here */}
                </div>
                

              </div>
              <div className="py-2">
                <label className="py-5 mb-5">Contact Number</label>
                <Input type="number" placeholder="Ex. 4894231747"></Input>
              </div>
              <div className="py-2">
                <label className="py-5 mb-5">Address</label>
                <Input placeholder="Ex. 1704 Gazipur"></Input>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;
