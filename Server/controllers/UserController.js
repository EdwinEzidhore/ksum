import  

export const formSubmit = async (req, res) => {
    try {
        const { fullName, email, dob, phone, gender, bio } = req.body;
        if (!fullName || !email || !dob || !phone || !gender || !bio) {
            return res.json({ status: 404 , message : "All Fields are reequired!"})
        }

    

    } catch (error) {
        
    }
}