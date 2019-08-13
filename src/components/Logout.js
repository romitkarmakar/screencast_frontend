import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { GoogleLogout } from 'react-google-login';
import { navigate } from 'gatsby';

export default (props) => {
    var [isLogged, setLogged] = useState(0)
    var [name, setName] = useState("")
    var [image, setImage] = useState("")

    useEffect(() => {
        if (localStorage.email) {
            setLogged(1)
            setName(localStorage.name)
            setImage(localStorage.image)
        }
    })

    function logOut() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Doy want log out of this competition",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Log out!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                localStorage.clear();
                swalWithBootstrapButtons.fire(
                    'Success',
                    'Your have been logged out.',
                    'success'
                )
                navigate("/")
            }
        })

    }

    if (isLogged == 1)
        return <div onClick={(e) => logOut()}>
            <img src={image} height={30} alt="Test" className="img-circle" />
            <span className="text-white m-2 text-capitalize">{name}</span>
        </div>
    else
        return <div></div>
}