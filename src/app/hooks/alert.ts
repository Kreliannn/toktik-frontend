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


export const askAlert = (msg : string, callBack : () => void) => {
  Swal.fire({
    title: "Are you sure?",
    text: msg,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "black",
    cancelButtonColor: "#d33",
    confirmButtonText: "yes"
  }).then((result) => {
    if (result.isConfirmed) {
      callBack()
    }
  });
}