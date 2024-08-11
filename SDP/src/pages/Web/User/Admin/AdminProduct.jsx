import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const AdminProduct = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const productnameref = useRef();
  const categoryref = useRef();
  const priceref = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/product/getall");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      ProductName: productnameref.current.value,
      productcategory: categoryref.current.value,
      productcost: priceref.current.value,
    };
    try {
      const res = await axios.post("http://localhost:8080/product/register", newProduct);
      setProducts([...products, res.data]);
      setOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Products</CardTitle>
          <Button onClick={() => setOpen(!open)} className="bg-slate-400 hover:bg-black w-20">
            Add
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.ProductId} className="relative">
              <CardHeader>
                <div className="flex flex-row">
                  <CardTitle>{product.ProductName}</CardTitle>
                  <div className="flex flex-row pl-32 gap-2">
                    <Edit className='h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-700' />
                    <TrashIcon className='h-6 w-6 text-red-500 cursor-pointer hover:text-red-700' />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img src="" className="h-20 w-20" alt="Product" />
                <p><strong>Category:</strong> {product.productcategory}</p>
                <p><strong>Price:</strong> {product.productcost}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <form onSubmit={handleSubmit}>
            <SheetHeader>
              <SheetTitle>Add Product</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="name" className="text-right">Product Name</Label>
                <Input id="name" className="col-span-3" ref={productnameref} />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="category" className="text-right">Category</Label>
                <Input id="category" className="col-span-3" ref={categoryref} />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="price" className="text-right">Price</Label>
                <Input id="price" className="col-span-3" ref={priceref} />
              </div>
            </div>
            <SheetFooter className='flex justify-between'>
              <Button className='bg-red-400 hover:bg-red-500' onClick={() => setOpen(false)}>Cancel</Button>
              <Button>Save changes</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminProduct;
