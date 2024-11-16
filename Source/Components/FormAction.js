const UserFormAction = async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    const email = formData.get('email');
    const password = formData.get('password');
    const pathName = new URL(request.url).pathname;
    if(pathName === '/login') {
        
    }else{
        
    }
    return null
}
export default UserFormAction