import { TextField, Button } from "@mui/material"


export default function SignUp()
{
    

    return(
        <div className="flex justify-center place-items-center w-full h-dvh">
            <div className="w-80 h-80  border drop-shadow-lg bg-gray-100 p-5">
                <h1 className="text-center text-2xl font-bold mb-3"> sign up </h1>
                <TextField type="text"  label="fullname" variant="outlined" fullWidth className="mb-5" />
                <TextField type="text"  label="username" variant="outlined" fullWidth className="mb-5" />
                <TextField type="text"  label="password" variant="outlined" fullWidth className="mb-5" />
                <TextField type="text"  label="confirm password" variant="outlined" fullWidth className="mb-5" />
                <Button variant="contained" fullWidth> sign in </Button>
            </div>
        </div>
    )
}