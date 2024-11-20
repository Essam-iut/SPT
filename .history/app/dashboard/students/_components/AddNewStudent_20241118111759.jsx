"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
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
import GloableApi from "@/app/_services/GloableApi";
function AddNewStudent() {
  const [open, setOpen] = useState(false);
  const [grades, setGrades] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    GloableApi.CreateNewStudent(data).then((resp) => {
      console.log("--", resp);
      if(resp.data){
        setOpen(false);
        toast('New Student ADD')
      }
    });
  };

  

  useEffect(() => {
    GetALLGradesList();
  }, []);

  const GetALLGradesList = () => {
    GloableApi.GetAllGrades().then((resp) => {
      setGrades(resp.data);
    });
  };

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
                  <Input
                    placeholder="Ex. Mohammed Al-Hamdi"
                    {...register("name", { required: true })}
                  ></Input>
                </div>
                <div className="flex  gap-3 flex-col">
                  <label>Select Grade</label>
                  <select
                    className="flex p-3 border rounded-lg"
                    {...register("grade", { required: true })}
                  >
                    {grades.map((item, index) => (
                      <option key={index} value={item.grade}>
                        {item.grade}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="py-2">
                  <label className="py-5 mb-5">Contact Number</label>
                  <Input
                    type="number"
                    placeholder="Ex. 4894231747"
                    {...register("contact", { required: true })}
                  ></Input>
                </div>
                <div className="py-2">
                  <label className="py-5 mb-5">Address</label>
                  <Input
                    placeholder="Ex. 1704 Gazipur"
                    {...register("address", { required: true })}
                  ></Input>
                </div>

                <div className="flex gap-3 items-center justify-end mt-5">
                  <Button onClick={() => setOpen(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
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
