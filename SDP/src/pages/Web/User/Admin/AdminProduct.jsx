import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
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

const AdminProduct = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  
  const productnameref = useRef();
  const categoryref = useRef();
  const priceref = useRef();
  const imageref = useRef();

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/homeproduct/getallproduct", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [token]);

  const deletebyid = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/homeproduct/deletebyid/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.filter((product) => product.productId !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      productName: productnameref.current.value,
      productcategory: categoryref.current.value,
      productcost: priceref.current.value,
      imagePath: imageref.current.value,
    };

    try {
      if (editingProduct) {
        // Update existing product
        const res = await axios.put(`http://localhost:8080/homeproduct/updateproduct/${editingProduct.productId}`, productData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(products.map((product) => (product.productId === editingProduct.productId ? res.data : product)));
      } else {
        // Add new product
        const res = await axios.post("http://localhost:8080/homeproduct/addproduct", productData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts([...products, res.data]);
      }
      setOpen(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Products</CardTitle>
          <Button onClick={() => setOpen(true)} className="bg-slate-400 hover:bg-black w-20">
            Add
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.productId} className="relative">
              <CardHeader>
                <div className="flex flex-row">
                  <CardTitle>{product.productName}</CardTitle>
                  <div className="flex flex-row pl-32 gap-2">
                    <Edit
                      className='h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-700'
                      onClick={() => openEditForm(product)}
                    />
                    <TrashIcon
                      className='h-6 w-6 text-red-500 cursor-pointer hover:text-red-700'
                      onClick={() => deletebyid(product.productId)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <img src={product.imagePath} className="h-20 w-20" alt={product.productName} />
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
              <SheetTitle>{editingProduct ? 'Edit Product' : 'Add Product'}</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="name" className="text-right">Product Name</Label>
                <Input
                  id="name"
                  className="col-span-3"
                  ref={productnameref}
                  defaultValue={editingProduct ? editingProduct.productName : ''}
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="category" className="text-right">Category</Label>
                <Input
                  id="category"
                  className="col-span-3"
                  ref={categoryref}
                  defaultValue={editingProduct ? editingProduct.productcategory : ''}
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="price" className="text-right">Price</Label>
                <Input
                  id="price"
                  className="col-span-3"
                  ref={priceref}
                  defaultValue={editingProduct ? editingProduct.productcost : ''}
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="image" className="text-right">Image Path</Label>
                <Input
                  id="image"
                  className="col-span-3"
                  ref={imageref}
                  defaultValue={editingProduct ? editingProduct.imagePath : ''}
                  placeholder="Enter image URL or path"
                />
              </div>
            </div>
            <SheetFooter className='flex justify-between'>
              <Button className='bg-red-400 hover:bg-red-500' onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminProduct;
