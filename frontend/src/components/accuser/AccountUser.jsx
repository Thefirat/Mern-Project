import { faEye, faPencil, faRefresh, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Passwords from '../forms/Passwords'


const AccountUser = () => {

    //Navigation
    const navigate = useNavigate();

    //Get data from localstorage
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;


    //To display current values in account page.
    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [address, setAddress] = useState(userInfo.address);
    const [phone, setPhone] = useState(userInfo.phone);


    //
    const [image, setImage] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [previewImage, setPrewiewImage] = useState(false);


    // Default value for change password before onclick
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("userInfo")) {
            localStorage.getItem("userInfo");
            navigate('/');
        }
    })

    const handlerUpdate = async (e) => {
        e.preventDefault();

        try {

            const { data } = await axios.put("/api/users/update", {
                _id: userInfo._id,
                name,
                email,
                address,
                phone
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            alert("User updated successfully!");

        } catch (err) {
            alert("Account not updated!!")
        }
    }
    //Profil foto 

    const validateImage = async (e) => {
        const file = e.target.files[0];
        if (file.size >= 1048574) {
            return alert("Max size for image is 1MB");
        } else {
            setImage(file);
            setPrewiewImage(URL.createObjectURL(file));
        }
    }
    //upload image to cloudiary 
    const UploadImage = async () => {
        const data = new FormData();
        data.append("api_key", "117415176132946");
        data.append("file", image);
        data.append("upload_present", "x4kstlvr");
        try {


            setUploadingImage(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/ddvioho6/image/upload", {

                method: "post",
                body: data
            });
            const urlData = await res.json();
            setUploadingImage(false);
            return urlData.url;

        } catch (error) {
            setUploadingImage(false);
            console.log(error);
        }
    }


    const handlerUpdateImage = async (e) => {
        e.preventDefault();

        if (!image) {
            return alert("Please select your profile image");
        }


        const url = await UploadImage(image);
        console.log(url);

        const { data } = await axios.put("/api/users/update", {
            _id: userInfo._id,
            image: url
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        alert("Profile Image updated successfully!");
    }

    return (
        <div className='account-row'>
            <h2 className="account-title">My Account</h2>
            <div className="account-groups">
                <div className="account-group">
                    <form className='form-image' onSubmit={handlerUpdateImage}>
                        <img src={previewImage || "assets/images/sellers/js.png" /* userInfo.image */} alt="" />
                        <label htmlFor="image_upload"><FontAwesomeIcon icon={faPlusCircle} />
                        </label>
                        <input type="file" hidden id='image_upload' accept='image/png image/jpg' /* userInfo.image */ onChange={validateImage} />
                        <button className='btn-upload'>{uploadingImage ? "Uploading..." : "Upload"}</button>
                    </form>
                    <div className="form-row account">
                        <form onSubmit={handlerUpdate}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input required type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input required type="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input required type="text" id='address' onChange={(e) => setAddress(e.target.value)} value={address} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input required type="text" id='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                            </div>
                            <div className="form-group">
                                <span className="change-password" onClick={() => setOpen(true)}>Change Password</span>
                            </div>
                            <div className="form-btn">
                                <button><FontAwesomeIcon icon={faRefresh} /> Update</button>
                            </div>
                        </form>
                    </div>
                    {open && <Passwords setOpen={setOpen} />}

                </div>
                <div className="account-group">
                    <h2 className="account-subtitle">My Products</h2>
                    <div className="account-products">
                        <div className="filter-cards">
                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/iphone14.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Iphone 14 <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Phone</span>
                                    <span className="price">10 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>

                            <div className="filter-card">
                                <div className="card-header">
                                    <img src="./assets/images/products/macbook1.jpg" alt="" />

                                </div>
                                <div className="card-body">
                                    <Link to="">Macbook Pro <FontAwesomeIcon icon={faEye} /> </Link>
                                    <span className='category'>Computer</span>
                                    <span className="price">12 000kr</span>
                                </div>
                                <div className="card-footer account">
                                    <button><FontAwesomeIcon icon={faPencil} /> Edit</button>
                                    <button><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="filter-pagination">
                            <ul>
                                <li><Link to="#">Prev</Link></li>
                                <li className='pagi-active'><Link to="#">1</Link></li>
                                <li><Link to="#">Next</Link></li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="account-subtitle">My Orders</h2>
                    <div className="account-orders">
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                        <h4>Order No: 234324234324 <Link to="/"><FontAwesomeIcon icon={faEye} /></Link></h4>
                    </div>
                    <div className="filter-pagination">
                        <ul>
                            <li><Link to="#">Prev</Link></li>
                            <li className='pagi-active'><Link to="#">1</Link></li>
                            <li><Link to="#">Next</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AccountUser