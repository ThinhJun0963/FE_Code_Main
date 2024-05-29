// const navigate = useNavigate()
// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   try {

//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     const payload = {
//       email: data.get('email'),
//       password: data.get('password'),
//     } //dữ liệu gửi lên server

//     const request = await axios.get(`http://localhost:9999/user?email=${payload.email}&password=${payload.password}`)
//     if (request.status === 200 && request.data.length) {
//       alert('Login success')
//       navigate('/')
//     } else {
//       alert('Email or password is incorrect')
//     }
//   } catch (error) {
//     alert('Login failed')
//   }
// };