import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const AdminVendors = () => {
  const [open, setOpen] = useState(false)
  const vendors = [
    {
        vendorid:'vendor001',
      vendor: "XXX",
      contact: "0440444",
      address: "xxxxx",
      
    },
    {
        vendorid:'vendor002',
      vendor: "YYY",
      contact: "0430444",
      address: "yyyy",
      
    },
    {
        vendorid:'vendor003',
      vendor: "ZZZ",
      contact: "0420444",
      address: "zzzz",
      
    },
    {
        vendorid:'vendor004',
      vendor: "MMM",
      contact: "0440888",
      address: "mmmmmm",
      
    },
   
    
  ]
  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Vendors</CardTitle>
          <Button onClick={() => setOpen(!open)} className="bg-slate-400 hover:bg-black w-20">
             Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">VendorId</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead >Address</TableHead>
                <TableHead className="flex justify-center ">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow key={vendor.vendor}>
                  <TableCell className="font-medium">{vendor.vendorid}</TableCell>
                  <TableCell className="font-medium">{vendor.vendor}</TableCell>
                  <TableCell>{vendor.contact}</TableCell>
                  <TableCell >{vendor.address}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                      <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add Vendor</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Vendor Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username" className="text-right">
            Contact
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email" className="text-right">
               Address
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
            
            
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default AdminVendors