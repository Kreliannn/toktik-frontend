import Swal from "sweetalert2";

export const successAlert = (msg : string) => {
    Swal.fire({
        title: "success",
        text: msg,
        icon: "success",
        confirmButtonText: 'OK',
        confirmButtonColor: '#000000'
      });
}

export const errorAlert = (msg : string) => {
    Swal.fire({
        title: "error",
        text: msg,
        icon: "error",
        confirmButtonText: 'OK',
        confirmButtonColor: '#000000'
      });
}