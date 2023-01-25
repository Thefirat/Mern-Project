import { faPlusCircle, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditProduct = ({ setOpenEdit, product }) => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

  //Rows can be changed
  const [name, setName] = useState(product.name);
  const [slug, setSlug] = useState(product.slug);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [imageProduct, setImageProduct] = useState(null);
  const [uploadingImageProduct, setUploadingImageProduct] = useState(false);
  const [previewImageProduct, setPrewiewImageProduct] = useState(product.image);

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


  const handlerUpdateProduct = async (e) => {
    e.preventDefault();

    //if is not set new images
    if (previewImageProduct) {
      try {
        const { data } = await axios.put("/api/products/update", {
          _id: product._id,
          name,
          slug,
          category,
          description,
          price,
          image: previewImageProduct,
          sellerId: userInfo._id,
          seller: userInfo.name,
          sellerImage: userInfo.image
        });
        console.log(data);
        alert("You have successfully updated product!");
        navigate('/account');
        setOpenEdit(false);

      } catch (error) {

        console.log("Error");
        alert("Update product failed, please try again!!");
      }
      //if not set new images, than set url link for new images
    } else {
      const url = await UploadImage(imageProduct);
      console.log(url);

      try {
        const { data } = await axios.put("/api/products/update", {
          _id: product._id,
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
        alert("You have successfully updated product!");
        navigate('/account');
        setOpenEdit(false);

      } catch (error) {

        console.log("Error");
        alert("Update product failed, please try again!!");
      }

    }
  }



  return (
    <div>
      <div className='passwords'>
        <form onSubmit={handlerUpdateProduct}>
          <div className="close-form" onClick={() => setOpenEdit(false)}>X</div>
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
            <img src={previewImageProduct} alt="" />
            <label htmlFor="image_update_product"><FontAwesomeIcon icon={faPlusCircle} />
            </label>
            <input type="file" hidden id='image_update_product' accept='image/png image/jpg' /* userInfo.image */ onChange={validateImageProduct} />
          </div>
          <div className="form-btn">
            <button type='submit'><FontAwesomeIcon icon={faRefresh} />{uploadingImageProduct ? "Changing..." : "Edit Product"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct