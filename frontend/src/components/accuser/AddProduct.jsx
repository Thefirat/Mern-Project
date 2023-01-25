import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const AddProduct = ({ setOpenAdd }) => {

    const navigate = useNavigate();
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageProduct, setImageProduct] = useState(null);
    const [uploadingImageProduct, setUploadingImageProduct] = useState(false);
    const [previewImageProduct, setPrewiewImageProduct] = useState(false);

    const validateImageProduct = async (e) => {
        const file = e.target.files[0];
        if (file.size >= 1048574) {
            return alert("Max size for image is 1MB");
        } else {
            setImageProduct(file);
            setPrewiewImageProduct(URL.createObjectURL(file));
        }
    }
    //upload image to cloudiary 
    const UploadImage = async () => {
        const data = new FormData();
        data.append("api_key", "117415176132946");
        data.append("file", imageProduct);
        data.append("upload_present", "x4kstlvr");
        try {


            setUploadingImageProduct(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/ddvioho6/image/upload", {

                method: "post",
                body: data
            });
            const urlData = await res.json();
            setUploadingImageProduct(false);
            return urlData.url;

        } catch (error) {
            setUploadingImageProduct(false);
            console.log(error);
        }
    }


    const handlerAddProduct = async (e) => {
        e.preventDefault();
        if(!imageProduct) {
            return alert("Please select your Product Image")
        }

        const url = await UploadImage(imageProduct);
        console.log(url);
    

        try{
            const {data} = await axios.post("/api/products/add", {
                name, 
                slug,
                category,
                description,
                price,
                image: url,
                sellerId: userInfo._id,
                seller: userInfo.name,
                sellerImage: userInfo.image
            });
            console.log(data);
            alert("You have successfully added product!");
            navigate('/account');
            setOpenAdd(false);

        }catch(error){

            console.log("Error");
            alert("Add product failed, please try again!!");
        }
    }

    






    return (
        <div className='passwords'>
            <form onSubmit={handlerAddProduct}>
                <div className="close-form" onClick={() => setOpenAdd(false)}>X</div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input required type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="slug">Slug</label>
                    <input required type="text" id='slug' onChange={(e) => setSlug(e.target.value)} value={slug} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input required type="text" id='category' onChange={(e) => setCategory(e.target.value)} value={category} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input required type="text" id='description' onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input required type="text" id='price' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div className="form-group form-image product">
                    <img src={previewImageProduct || "https://res.cloudinary.com/ddvioho6m/image/upload/v1674591011/iphone14_fplzyv.jpg"}alt="" />
                    <label htmlFor="image_upload_product"><FontAwesomeIcon icon={faPlusCircle} />
                    </label>
                    <input type="file" hidden id='image_upload_product' accept='image/png image/jpg' /* userInfo.image */ onChange={validateImageProduct} />
                </div>
                <div className="form-btn">
                    <button type='submit'><FontAwesomeIcon icon={faPlusCircle}/>{uploadingImageProduct ? "Saving..." : "Saved"}</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct