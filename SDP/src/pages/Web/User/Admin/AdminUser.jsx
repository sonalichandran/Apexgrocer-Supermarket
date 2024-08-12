import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const usernameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();

  
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signup = {
      email: emailref.current.value,
      username: usernameref.current.value,
      password: passwordref.current.value,
    };

    try {
      const res = await axios.post(
        'http://localhost:8080/api/auth/register',
        signup,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('User registered:', res.data);
   
      setOpen(false);
      fetchUsers(); 
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  const handledelete = async (uid) => {
    alert("user will be deleted");
    try {
      const del = await axios.delete(`http://localhost:8080/api/auth/deletebyid/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('User deleted:', del.data);
      fetchUsers(); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/auth/getall', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="m-1 p-4">
      <Card className="shadow-sm shadow-primary">
        <CardHeader className="w-full flex flex-row justify-between items-center">
          <CardTitle>Users</CardTitle>
          <Button onClick={() => setOpen(!open)} className="bg-slate-400 hover:bg-black w-20">
            Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">UserId</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Password</TableHead>
                <TableHead className="flex justify-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.uid}>
                  <TableCell className="font-medium">{user.uid}</TableCell>
                  <TableCell className="font-medium">{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>
                    <span className="w-full h-full flex justify-center items-center gap-3">
                     
                      <TrashIcon className="h-8 w-8 p-1 text-black-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md" onClick={()=>handledelete(user.uid)} />
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
          <form onSubmit={handleSubmit}>
            <SheetHeader>
              <SheetTitle>Add User</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" className="col-span-3" ref={usernameref} />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" className="col-span-3" ref={emailref} />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input id="password" className="col-span-3" ref={passwordref} />
              </div>
            </div>
            <SheetFooter className="flex flex-col flex-1">
              <Button className="w-1/2 outline bg-red-400/90 hover:bg-red-400" onClick={() => setOpen(!open)}>
                Cancel
              </Button>
              <Button type="submit" className="w-1/2">
                Save changes
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminUsers;
