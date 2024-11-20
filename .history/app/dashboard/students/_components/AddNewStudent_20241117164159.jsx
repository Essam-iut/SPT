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
import { useForm } from "react-hook-form";

function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    console.log(data)
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Add New Students</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student: </DialogTitle>
            <DialogDescription>
              <form onSubmit={handleSubmit(onSubmit)}> 
              <div className="py-2">
                <label className="py-5 mb-5">Full Name</label>
                <Input placeholder="Ex. Muheeb Al-Hamali"></Input>
                {...register('name',required)}
              </div>
              <div className="flex  gap-3 flex-col">
                <label>Select Grade</label>
                <select className="flex p-3 border rounded-lg"> 
                {...register('grade',required)}
                  <option value={"Grade 1st"}>
                    Grade 1<sup>st</sup>
                  </option>
                  <option value={"Grade 2nd"}>
                    Grade 2<sup>nd</sup>
                  </option>
                  <option value={"Grade 3rd"}>
                    Grade 3<sup>rd</sup>
                  </option>
                  <option value={"Grade 4th"}>
                    Grade 4<sup>th</sup>
                  </option>
                  <option value={"Grade 5th"}>
                    Grade 5<sup>th</sup>
                  </option>
                  <option value={"Grade 6th"}>
                    Grade 6<sup>th</sup>
                  </option>
                  <option value={"Grade 7th"}>
                    Grade 7<sup>th</sup>
                  </option>
                  <option value={"Grade 8th"}>
                    Grade 8<sup>th</sup>
                  </option>
                  <option value={"Grade 9th"}>
                    Grade 9<sup>th</sup>
                  </option>
                  <option value={"Grade 10th"}>
                    Grade 10<sup>th</sup>
                  </option>
                  <option value={"Grade 11th"}>
                    Grade 11<sup>th</sup>
                  </option>
                  <option value={"Grade 12th"}>
                    Grade 12<sup>th</sup>
                  </option>
                </select>
              </div>

              <div className="py-2">
                <label className="py-5 mb-5">Contact Number</label>
                <Input type="number" placeholder="Ex. 4894231747"></Input>
                {...register('contact',{required})}
              </div>
              <div className="py-2">
                <label className="py-5 mb-5">Address</label>
                <Input placeholder="Ex. 1704 Gazipur"></Input>
                {...register('address',required)}
              </div>

              <div className="flex gap-3 items-center justify-end mt-5">
                <Button onClick={()=>setOpen(false)} variant="ghost">Cancel</Button>
                <Button onClick={()=>console.log("save")} type="submit">Save</Button>
              </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewStudent;